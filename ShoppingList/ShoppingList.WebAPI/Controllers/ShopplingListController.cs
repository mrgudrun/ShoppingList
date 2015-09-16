using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Infrastructure.Models;
using ShoppingList.WebAPI.Models.Request;
using System.Web.Http.Cors;
using ShoppingList.Infrastructure.Models.Security;

namespace ShoppingList.WebAPI.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class ShopplingListController : ApiController
    {
        private IShoppingListRepository _shoppingListRepository;

        public ShopplingListController(IShoppingListRepository shoppingListRepository)
        {
            _shoppingListRepository = shoppingListRepository;
        }

        public ShoppingListModel Create([FromBody]CreateShoppingListRequest request)
        {
            return _shoppingListRepository.CreateEmptyList(request);
        }

        public ShoppingListModel Get(int id)
        {
            return _shoppingListRepository.GetById(id);
        }

        //'/webapi/api/Shopplinglist/getbyuserid/' + userId
        [Route("api/Shoppinglist/getbyuserid/{userId}")]
        [HttpGet]
        public List<ShoppingListModel> GetShoppingListsByUserId(int userId)
        {
            return _shoppingListRepository.GetByUserId(userId);
        }

        [HttpPut]
        public bool UpdateTitle(int id, [FromBody] ShoppingListUpdateRequest model)
        {
            return _shoppingListRepository.UpdateTitle(id, model.Name);
        }

        [HttpPost]
        [Route("api/Shoppinglist/{id}/AddFriend/{friendId}")]
        public bool PutFriendToShoppingList(int id, int friendId)
        {
            return true;
        }


 [HttpDelete]
        public IHttpActionResult Delete(int id)
        {
            var response = new HttpResponseMessage();
            
            return Ok(_shoppingListRepository.Delete(id));

        }
    }
}
