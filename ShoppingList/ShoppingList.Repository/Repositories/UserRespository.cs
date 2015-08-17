using System;
using System.Collections.Generic;
using System.Linq;
using ShoppingList.EFModel;
using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Repository.Mappers;

namespace ShoppingList.Repository.Repositories
{
    public class UserRespository : RepositoryBase<UserModel, User>, IUserRepository
    {

        public UserRespository() : base(new UserMapper())
        {
        }

        public IEnumerable<UserModel> GetUsers()
        {
            using (var context = new ShoppingListContext())
            {
                return new List<UserModel>() { new UserModel { Username = "Runar" }, new UserModel { Username = "Elin" } };
            }
        }

        public UserModel TryLoginUser(string userName, string password)
        {
            using (var context = new ShoppingListContext())
            {
                var efUser = context.Users.FirstOrDefault(x => 
                x.Username.Equals(userName, StringComparison.InvariantCultureIgnoreCase)
                && x.Password.Equals(password, StringComparison.InvariantCulture));
                return efUser != null ? Map(efUser) : null;
            }
        }

        public UserModel TryCreateUser(string username, string password, out string message)
        {
            message = "";
            using (var context = new ShoppingListContext())
            {
                var userExists = context.Users.Any(x => x.Username.Equals(username, StringComparison.InvariantCultureIgnoreCase));
                User user = null;
                if (!userExists)
                {
                    user = new User() {Username = username, Password = password};
                    context.Users.Add(user);
                    context.SaveChanges();
                }
                else
                {
                    message = "User already exists";
                }
                return user != null ? Map(user) : null;
            }
        }
    }
}
