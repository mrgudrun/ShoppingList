namespace ShoppingList.EFModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class extendedShoppingList : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.ShoppingItems", "Completed", c => c.Boolean(nullable: false));
            AddColumn("dbo.ShoppingLists", "Owner_Id", c => c.Int());
            CreateIndex("dbo.ShoppingLists", "Owner_Id");
            AddForeignKey("dbo.ShoppingLists", "Owner_Id", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.ShoppingLists", "Owner_Id", "dbo.Users");
            DropIndex("dbo.ShoppingLists", new[] { "Owner_Id" });
            DropColumn("dbo.ShoppingLists", "Owner_Id");
            DropColumn("dbo.ShoppingItems", "Completed");
        }
    }
}
