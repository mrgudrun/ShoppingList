using System;
using System.Collections.Generic;
using System.Linq;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.EFModel;
using ShoppingList.Repository.Mappers;
using ShoppingList = ShoppingList.EFModel.Entities.ShoppingList;
using ShoppingList.WebAPI.Models.Request;

namespace ShoppingList.Repository.Repositories
{
    public class ShoppingListRepository : RepositoryBase<ShoppingListModel,EFModel.Entities.ShoppingList>, IShoppingListRepository
    {
        public ShoppingListRepository() : base(new ShoppingListMapper())
        {

        }

        public override bool Delete(int id)
        {
            using (var context = new ShoppingListContext())
            {
                var sl = context.ShoppingLists.Find(id);
                
                foreach (var item in sl.Items.ToList())
                {
                    sl.Items.Remove(item);
                };
                context.ShoppingLists.Remove(sl);
                context.SaveChanges();
                return true;
            }
        }
        public ShoppingListModel CreateEmptyList(CreateShoppingListRequest request)
        {
            using (var context = new ShoppingListContext())
            {
                var owner = context.Users.Find(request.UserId);
                var list = new EFModel.Entities.ShoppingList() {Owner = owner,
                Name = request.Name};
              
              var items =  request.ShoppingItems.Select(x => new EFModel.Entities.ShoppingItem() {Name = x.Name });
                foreach(var i in items)
                {
                    list.Items.Add(i);
                }
                context.ShoppingLists.Add(list);
                context.SaveChanges();
                return Map(list);
            }
        }

        public List<ShoppingListModel> GetByUserId(int userId)
        {
            using (var context = new ShoppingListContext())
            {
                var owner = context.Users.Find(userId);
                var shoppinglists = context.ShoppingLists.Include("Items").Where(x => x.Owner.Id == userId).ToList();
                var toModel = shoppinglists.Select(sl => Map(sl)).ToList();
                return toModel;
            }
        }

        public bool UpdateTitle(int id, string title)
        {
            using (var context = new ShoppingListContext())
            {
                var sl = context.ShoppingLists.Find(id);
                sl.Name = title;
                context.SaveChanges();
                return true;
            }
        }
    }
}
