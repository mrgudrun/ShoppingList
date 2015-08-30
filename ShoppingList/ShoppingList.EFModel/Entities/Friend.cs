using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.EFModel.Entities
{
    public class Friend
    {
        public int Id { get; set; }

        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

        public int UserFriendId { get; set; }
        [ForeignKey("UserFriendId")]
        public User UserFriend { get; set; }

    }
}
