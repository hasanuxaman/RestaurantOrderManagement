using MenuService.Api.Dtos;
using MenuService.Api.Models;
using MenuService.Api.Repositories.Interface;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace MenuService.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MenuController : ControllerBase
    {
        private readonly IMenuRepository _repo;

        public MenuController(IMenuRepository repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll() => Ok(await _repo.GetAllAsync());

        [HttpGet("{id}")]
        public async Task<IActionResult> Get(int id)
        {
            var item = await _repo.GetByIdAsync(id);
            if (item == null) return NotFound();
            return Ok(item);
        }

        [HttpPost]
        public async Task<IActionResult> Create(MenuItemDto dto)
        {
            var item = new MenuItem
            {
                Name = dto.Name,
                Category = dto.Category,
                Price = dto.Price,
                IsAvailable = dto.IsAvailable
            };
            var id = await _repo.CreateAsync(item);
            return CreatedAtAction(nameof(Get), new { id }, item);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, MenuItemDto dto)
        {
            var item = new MenuItem
            {
                Id = id,
                Name = dto.Name,
                Category = dto.Category,
                Price = dto.Price,
                IsAvailable = dto.IsAvailable
            };
            var updated = await _repo.UpdateAsync(item);
            return updated ? NoContent() : NotFound();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var deleted = await _repo.DeleteAsync(id);
            return deleted ? NoContent() : NotFound();
        }
    }
}
