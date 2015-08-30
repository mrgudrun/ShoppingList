using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.EFModel.Entities
{
    public class User
    {
        public User()
        {
            Friends = new HashSet<Friend>();
        }

        public int Id { get; set; }
        public string Username { get; set; }

        public string Password { get; set; }

        public ICollection<Friend> Friends { get; set; }

    }
}
