using System.Collections.Generic;
using System.Linq;
using System.Web.Http;
using ShoppingList.Domain.RepositoryWrappers;
using ShoppingList.Infrastructure.Models;

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
        public UserModel Login([FromBody] object ovject)
        {
            var oob = ovject;
            return _user.GetUserByLogin("runarTest", "runar");
        }


        public IEnumerable<UserModel> GetAllUsers()
        {
         
            var list = _user.GetAllUsers();
            return list;
        }
    }
}
