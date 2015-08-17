using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.WebAPI.Controllers
{
    public class ShopplingListController : ApiController
    {
        private IShoppingListRepository _shoppingListRepository;

        public ShopplingListController(IShoppingListRepository shoppingListRepository)
        {
            _shoppingListRepository = shoppingListRepository;
        }

        public ShoppingListModel Create()
        {
            return _shoppingListRepository.CreateEmptyList();
        }
    }
}
