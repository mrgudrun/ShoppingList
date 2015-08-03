using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ShoppingList.Domain.RepositoryWrappers;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Infrastructure.Models.Security;

namespace ShoppingList.WebAPI.Controllers
{
    public class UserController : ApiController
    {
        private UserDomain _user;

        public UserController(UserDomain user)
        {
            _user = user;
        }

        public UserModel Get(int id)
        {
            return _user.GetUserById(id);
        }
    
        public UserModel Login([FromBody] LoginRequest loginRequest)
        {
            return _user.GetUserByLogin(loginRequest.Username, loginRequest.Password);
        }
        public IEnumerable<UserModel> GetAllUsers()
        {
         
            var list = _user.GetAllUsers();
            return list;
        }
    }
}
