using MenuService.Api.Models;

namespace MenuService.Api.Repositories.Interface
{
    public interface IMenuRepository
    {
        Task<IEnumerable<MenuItem>> GetAllAsync();
        Task<MenuItem?> GetByIdAsync(int id);
        Task<int> CreateAsync(MenuItem item);
        Task<bool> UpdateAsync(MenuItem item);
        Task<bool> DeleteAsync(int id);
    }
}
