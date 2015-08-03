using ShoppingList.Infrastructure.Models;
using ShoppingList.Infrastructure.Models.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingList.Domain.RepositoryWrappers;

namespace ShoppingList.WebAPI.Controllers
{
    public class SignUpController : ApiController
    {
        private UserDomain _userDomain;

        public SignUpController(UserDomain userDomain)
        {
            _userDomain = userDomain;
        }

        public SignUpResponse SignUp([FromBody] SignUpRequest signUpRequest)
        {
            return _userDomain.TryCreateUser(signUpRequest.Username, signUpRequest.Password);

            //return new UserModel() { Username = "ItWorks" };
        }
    }
}
