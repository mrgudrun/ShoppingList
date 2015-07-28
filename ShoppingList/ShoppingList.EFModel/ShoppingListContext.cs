using System;
using System.Collections.Generic;
using System.Data.Entity;
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
        }



        public DbSet<User> Type { get; set; }
    }
}
