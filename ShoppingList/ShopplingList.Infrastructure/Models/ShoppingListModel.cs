using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Infrastructure.Models
{
    public class ShoppingListModel
    {
        public ShoppingListModel()
        {
            ShoppingItems = new List<ShoppingItemModel>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public List<ShoppingItemModel> ShoppingItems { get; set; }

    }
}
