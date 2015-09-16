using ShoppingList.Infrastructure.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IFriendRepository
    {
        bool AddFriend(int userId, string friendRequest);
    }
}
