using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IShoppingListRepository : IRepositoryBase<ShoppingListModel>
    {
        ShoppingListModel CreateEmptyList();
    }
    public interface IShoppingItemRepository : IRepositoryBase<ShoppingItemModel>
    {
        ShoppingItemModel Create(int shoppingListId, string itemName);
    }

}
