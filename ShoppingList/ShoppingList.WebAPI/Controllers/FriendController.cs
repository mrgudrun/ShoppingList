using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models.Security;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ShoppingList.WebAPI.Controllers
{
    public class FriendController : ApiController
    {
        private IFriendRepository _friendRepository;
        public FriendController(IFriendRepository friendRepository)
        {
            _friendRepository = friendRepository;
        }

        public bool Post([FromBody] FriendRequest request)
        {
            return _friendRepository.AddFriend(request.UserId, request.Friend);
        }
    }
}
