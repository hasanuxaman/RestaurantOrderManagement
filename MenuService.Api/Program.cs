using MenuService.Api.Data;
using MenuService.Api.Repositories;
using MenuService.Api.Repositories.Interface;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
// Add CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") // React App URL
                  .AllowAnyHeader()
                  .AllowAnyMethod();
        });
});


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// EF Core
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

// Dapper
builder.Services.AddSingleton<DapperContext>();

// Repos
builder.Services.AddScoped<IMenuRepository, MenuRepository>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

// Use CORS
app.UseCors("AllowFrontend");

// Add middleware
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
