using System.Collections.Generic;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IUserRepository: IRepositoryBase<UserModel>
    {
        IEnumerable<UserModel> GetUsers();
        UserModel GetUserByLogin(string userName, string password);
    }
}