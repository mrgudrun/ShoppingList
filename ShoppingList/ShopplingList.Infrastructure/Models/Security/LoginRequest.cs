using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Infrastructure.Models.Security
{
    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class SignUpRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }

    public class SignUpResponse
    {
        public SignUpResponse(bool success, string message, UserModel userModel)
        {
            Success = success;
            Message = message;
            UserModel = userModel;
        }

        public bool Success { get; set; }

        public UserModel UserModel { get; set; }

        public string Message { get; set; }
    }
}
