using Dapper;
using MenuService.Api.Data;
using MenuService.Api.Models;
using MenuService.Api.Repositories.Interface;

namespace MenuService.Api.Repositories
{
    public class MenuRepository : IMenuRepository
    {
        private readonly DapperContext _context;

        public MenuRepository(DapperContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MenuItem>> GetAllAsync()
        {
            var sql = "SELECT * FROM MenuItems";
            using var connection = _context.CreateConnection();
            return await connection.QueryAsync<MenuItem>(sql);
        }

        public async Task<MenuItem?> GetByIdAsync(int id)
        {
            var sql = "SELECT * FROM MenuItems WHERE Id = @Id";
            using var connection = _context.CreateConnection();
            return await connection.QueryFirstOrDefaultAsync<MenuItem>(sql, new { Id = id });
        }

        public async Task<int> CreateAsync(MenuItem item)
        {
            var sql = "INSERT INTO MenuItems (Name, Category, Price, IsAvailable) VALUES (@Name, @Category, @Price, @IsAvailable); SELECT CAST(SCOPE_IDENTITY() as int);";
            using var connection = _context.CreateConnection();
            return await connection.ExecuteScalarAsync<int>(sql, item);
        }

        public async Task<bool> UpdateAsync(MenuItem item)
        {
            var sql = "UPDATE MenuItems SET Name = @Name, Category = @Category, Price = @Price, IsAvailable = @IsAvailable WHERE Id = @Id";
            using var connection = _context.CreateConnection();
            var result = await connection.ExecuteAsync(sql, item);
            return result > 0;
        }

        public async Task<bool> DeleteAsync(int id)
        {
            var sql = "DELETE FROM MenuItems WHERE Id = @Id";
            using var connection = _context.CreateConnection();
            var result = await connection.ExecuteAsync(sql, new { Id = id });
            return result > 0;
        }
    }
}
