namespace OrderService.Api.Models
{
    public class Order
    {
        public int Id { get; set; }
        public string CustomerName { get; set; }
        public DateTime OrderDate { get; set; }
        public string TableNumber { get; set; }

        public List<OrderItem> OrderItems { get; set; }
    }
}
