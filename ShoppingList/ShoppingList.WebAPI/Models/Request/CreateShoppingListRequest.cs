using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ShoppingList.WebAPI.Models.Request
{
    public class CreateShoppingListRequest
    {
        public int UserId { get; set; }
    }
}