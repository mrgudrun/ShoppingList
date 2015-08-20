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


        public User Owner { get; set; }

        public string Name { get; set; }

        public virtual ICollection<ShoppingItem> Items { get; set; }
    }
}
