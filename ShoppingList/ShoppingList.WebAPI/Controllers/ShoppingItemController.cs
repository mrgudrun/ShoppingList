using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.WebAPI.Models.Request;

namespace ShoppingList.WebAPI.Controllers
{
    public class ShoppingItemController : ApiController
    {
        private IShoppingItemRepository _shoppingItemRepository;

        public ShoppingItemController(IShoppingItemRepository shoppingItemRepository)
        {
            _shoppingItemRepository = shoppingItemRepository;
        }

        public ShoppingItemModel Create([FromBody] ShoppingItemRequest request )
        {
            return _shoppingItemRepository.Create(request.ShoppingListId, request.Name);
        }

        [HttpDelete]
        public void Delete(int id)
        {
            _shoppingItemRepository.Delete(id);
        }
    }
}
