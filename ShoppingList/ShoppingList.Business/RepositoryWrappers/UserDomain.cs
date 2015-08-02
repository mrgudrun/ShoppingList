using System.Collections.Generic;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;

namespace ShoppingList.Domain.RepositoryWrappers
{
    public class UserDomain
    {
        private readonly IUserRepository _userRespository;

        public UserDomain(IUserRepository userRespository)
        {
            _userRespository = userRespository;
        }

        public IEnumerable<UserModel> GetAllUsers()
        {
            return _userRespository.GetUsers();
        }

        public UserModel GetUserById(int id)
        {
           return _userRespository.GetById(id);
        }

        public UserModel GetUserByLogin(string userName, string password)
        {
            return _userRespository.TryLoginUser(userName, password);
        }
    }
}
