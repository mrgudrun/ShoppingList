using ShoppingList.EFModel;
using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Repository.Repositories
{
    public class FriendRepository : IFriendRepository
    {
        public bool AddFriend(int userId, string friendRequest)
        {
            using (var dbContext = new ShoppingListContext())
            {
                bool friendAdded = false;
                var friend = dbContext.Users.FirstOrDefault(x => x.Username.Equals(friendRequest, StringComparison.InvariantCultureIgnoreCase));
                var user = dbContext.Users.Find(userId);
                friendAdded = AddFriend(user, friend, dbContext);
                AddFriend(friend, user, dbContext);
                dbContext.SaveChanges();
                return friendAdded;
            }
        }

        private bool AddFriend(User user, User friend, ShoppingListContext context)
        {
            var hasMatch = user.Friends.Any(x => x.UserFriendId == friend.Id);
            bool friendAdded = false;
            if (!hasMatch)
            {
                var newFriend = new Friend { UserId = user.Id, UserFriendId = friend.Id };
                user.Friends.Add(newFriend);
                friendAdded = true;
            }
            return friendAdded;
        }
    }
}
