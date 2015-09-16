using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Repository.Mappers
{
    public class ShoppingItemMapper : IMapper<ShoppingItemModel, ShoppingItem>
    {
        public ShoppingItemModel Map(ShoppingItem efModel)
        {
            var shoppingItem = new ShoppingItemModel();
            shoppingItem.Id = efModel.Id;
            shoppingItem.Name = efModel.Name;
            return shoppingItem;
        }
    }
}
