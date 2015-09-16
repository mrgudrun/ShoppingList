using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingList.EFModel;
using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Repository.Mappers;

namespace ShoppingList.Repository.Repositories
{
    public class ShoppingItemRepository : RepositoryBase<ShoppingItemModel, ShoppingItem>, IShoppingItemRepository
    {
        public ShoppingItemRepository() : base(new ShoppingItemMapper())
        {
        }

        public ShoppingItemModel Create(int shoppingListId, string itemName)
        {
            using (var context = new ShoppingListContext())
            {
               var list = context.ShoppingLists.FirstOrDefault(x => x.Id == shoppingListId);
                if (list != null)
                {
                    var item = new ShoppingItem {Name = itemName};
                    list.Items.Add(item);
                    context.SaveChanges();
                    return Map(item);
                }
                else
                {
                    return null;
                }
            }
        }
    }
}
