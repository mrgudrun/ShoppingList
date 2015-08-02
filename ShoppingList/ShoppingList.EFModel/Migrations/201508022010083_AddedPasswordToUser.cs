namespace ShoppingList.EFModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedPasswordToUser : DbMigration
    {
        public override void Up()
        {
            RenameTable(name: "dbo.Items", newName: "ShoppingItems");
            AddColumn("dbo.Users", "Password", c => c.String());
        }
        
        public override void Down()
        {
            DropColumn("dbo.Users", "Password");
            RenameTable(name: "dbo.ShoppingItems", newName: "Items");
        }
    }
}
