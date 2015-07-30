using System;
using System.Collections.Generic;
using ShoppingList.EFModel;
using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Repository.Mappers;

namespace ShoppingList.Repository.Repositories
{
    public class UserRespository : RepositoryBase<UserModel, User>, IUserRepository
    {

        public UserRespository() : base(UserMapper.Mapping)
        {
        }

        public IEnumerable<UserModel> GetUsers()
        {
            using (var context = new ShoppingListContext())
            {
                return new List<UserModel>() { new UserModel { Username = "Runar" }, new UserModel { Username = "Elin" } };
            }
        }
    }
}
