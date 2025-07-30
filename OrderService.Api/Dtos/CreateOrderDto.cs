using OrderService.Api.Models;

namespace OrderService.Api.Dtos
{
    public class CreateOrderDto
    {
        public string? CustomerName { get; set; }
        public DateTime OrderDate { get; set; }
        public string? TableNumber { get; set; }
        public List<CreateOrderItemsDto>? OrderItems { get; set; }
    }
}
