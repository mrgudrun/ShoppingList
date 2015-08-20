using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.EFModel.Entities
{
    public class ShoppingItem
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public bool Completed { get; set; }
    }
}
