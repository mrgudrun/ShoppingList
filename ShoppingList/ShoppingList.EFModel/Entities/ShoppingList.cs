using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.EFModel.Entities
{
    public class ShoppingList
    {
        public ShoppingList()
        {
            Items = new HashSet<ShoppingItem>();
        }
        public int Id { get; set; }

        public string Name { get; set; }

        public ICollection<ShoppingItem> Items { get; set; }
    }
}
