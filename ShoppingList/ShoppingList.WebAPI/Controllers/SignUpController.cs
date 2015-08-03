using ShoppingList.Infrastructure.Models;
using ShoppingList.Infrastructure.Models.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingList.WebAPI.Controllers
{
    public class SignUpController : ApiController
    {
        public UserModel SignUp([FromBody] SignUpRequest signUpRequest)
        {
            return new UserModel() { Username = "ItWorks" };
        }
    }
}
