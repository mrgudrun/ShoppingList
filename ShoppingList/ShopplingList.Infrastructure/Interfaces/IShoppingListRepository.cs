using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingList.Infrastructure.Models;
using ShoppingList.WebAPI.Models.Request;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IShoppingListRepository : IRepositoryBase<ShoppingListModel>
    {
        ShoppingListModel CreateEmptyList(CreateShoppingListRequest request);

        List<ShoppingListModel> GetByUserId(int userId);
        bool UpdateTitle(int id, string title);
    }
    public interface IShoppingItemRepository : IRepositoryBase<ShoppingItemModel>
    {
        ShoppingItemModel Create(int shoppingListId, string itemName);
    }

}
