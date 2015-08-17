using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingList.WebAPI.Models.Request
{
    public class ShoppingItemRequest
    {
        public int ShoppingListId { get; set; }
        public int ShoppingItemId { get; set; }
        public string Name { get; set; }    
    }
}