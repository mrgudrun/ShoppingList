using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.Core.Objects;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ShoppingList.EFModel.Entities;

namespace ShoppingList.EFModel
{
    public class ShoppingListContext : DbContext
    {
        private const string ConnectionStringName = "ShoppingListDb";

        public ShoppingListContext() : base(ConnectionStringName)
        {
            Database.SetInitializer(new MigrateDatabaseToLatestVersion<ShoppingListContext, Migrations.Configuration>(ConnectionStringName));
            Configuration.LazyLoadingEnabled = true;
        }



        public DbSet<User> Users { get; set; }
        public DbSet<Entities.ShoppingList> ShoppingLists { get; set; }
        public DbSet<ShoppingItem> Items { get; set; }
        public DbSet<Friend> Friends { get; set; }

    }
}
