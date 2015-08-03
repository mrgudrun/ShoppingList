using System.Collections.Generic;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Infrastructure.Models.Security;

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

        public UserModel GetUserByLogin(string username, string password)
        {
            return _userRespository.TryLoginUser(username, password);
        }
        public SignUpResponse TryCreateUser(string username, string password)
        {
            string message;
            var user = _userRespository.TryCreateUser(username, password, out message);
            var signUpResponse = new SignUpResponse(user != null, message, user);
            return signUpResponse;
        }
    }
}
