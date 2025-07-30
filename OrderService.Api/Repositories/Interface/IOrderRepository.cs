using OrderService.Api.Dtos;
using OrderService.Api.Models;

namespace OrderService.Api.Repositories.Interface
{
    public interface IOrderRepository
    {

        Task<IEnumerable<Order>> GetAllAsync();
        Task<Order?> GetByIdAsync(int id);
        Task<Order> CreateAsync(CreateOrderDto dto);
        Task<bool> DeleteAsync(int id);
    }
}
