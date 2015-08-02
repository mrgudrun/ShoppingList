using System.Collections.Generic;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IUserRepository: IRepositoryBase<UserModel>
    {
        IEnumerable<UserModel> GetUsers();
        UserModel TryLoginUser(string userName, string password);
    }
}