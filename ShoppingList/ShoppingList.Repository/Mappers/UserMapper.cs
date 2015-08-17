using ShoppingList.EFModel.Entities;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Repository.Mappers
{
    public class UserMapper : IMapper<UserModel, User>
    {

        public UserModel Map(User efUser)
        {
            var userModel = new UserModel();
            userModel.Username = efUser.Username;
            return userModel;
        }
    }
}