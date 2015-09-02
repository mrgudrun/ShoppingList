using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingList.WebAPI.Models.Request
{
    public class CreateShoppingListRequest
    {
        public int UserId { get; set; }

        public int ShoppingListId { get; set; }
        public string Name { get; set; }

        public IEnumerable<ShoppingListItemRequest> ShoppingItems { get; set; }

    }

    public class ShoppingListItemRequest
    {
        public string Name { get; set; }
    }
}