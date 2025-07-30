using MenuService.Api.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace MenuService.Api.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<MenuItem> MenuItems { get; set; }
    }
}
