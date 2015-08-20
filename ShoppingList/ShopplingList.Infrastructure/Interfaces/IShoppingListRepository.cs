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
        ShoppingListModel CreateEmptyList(int ownerUserId);

        List<ShoppingListModel> GetByUserId(int userId);
    }
    public interface IShoppingItemRepository : IRepositoryBase<ShoppingItemModel>
    {
        ShoppingItemModel Create(int shoppingListId, string itemName);
    }

}
