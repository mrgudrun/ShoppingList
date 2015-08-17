using System;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.EFModel;
using ShoppingList.Repository.Mappers;
using ShoppingList = ShoppingList.EFModel.Entities.ShoppingList;

namespace ShoppingList.Repository.Repositories
{
    public class ShoppingListRepository : RepositoryBase<ShoppingListModel,EFModel.Entities.ShoppingList>, IShoppingListRepository
    {
        public ShoppingListRepository() : base(new ShoppingListMapper())
        {

        }
        public ShoppingListModel GetById(int id)
        {
            throw new NotImplementedException();
        }

        public ShoppingListModel CreateEmptyList()
        {
            using (var context = new ShoppingListContext())
            {
                var list = new EFModel.Entities.ShoppingList();
                context.ShoppingLists.Add(list);
                context.SaveChanges();
                return Map(list);
            }
        }
    }
}
