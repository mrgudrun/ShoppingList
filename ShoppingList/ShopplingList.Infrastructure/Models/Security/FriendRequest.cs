using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Infrastructure.Models.Security
{
    public class FriendRequest
    {
        public int UserId { get; set; }

        public string Friend { get; set; }
    }
}
