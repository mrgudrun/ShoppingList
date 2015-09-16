using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ShoppingList.Domain.RepositoryWrappers;
using ShoppingList.Infrastructure.Models;
using ShoppingList.Infrastructure.Models.Security;
using ShoppingList.Infrastructure.Interfaces;

namespace ShoppingList.WebAPI.Controllers
{
    public class UserController : ApiController
    {
        private UserDomain _user;
        IUserRepository _userRepository;
        public UserController(UserDomain user, IUserRepository userRepository)
        {
            _user = user;
            _userRepository = userRepository;
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

        [HttpGet]
        [Route("api/user/{id}/friends")]
        public IEnumerable<FriendModel> GetFriends(int id)
        {
            return _userRepository.GetFriends(id);
        }
    }
}
