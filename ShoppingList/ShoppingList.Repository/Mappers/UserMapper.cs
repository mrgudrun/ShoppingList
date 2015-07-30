using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Repository.Mappers
{
    public static class UserMapper
    {
        public static UserModel Mapping(User efUser)
        {
            var userModel = new UserModel();
            userModel.Username = efUser.Username;
            return userModel;
        }
    }
}