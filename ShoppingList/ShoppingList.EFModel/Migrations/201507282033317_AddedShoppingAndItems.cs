namespace ShoppingList.EFModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedShoppingAndItems : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Items",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                        ShoppingList_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.ShoppingLists", t => t.ShoppingList_Id)
                .Index(t => t.ShoppingList_Id);
            
            CreateTable(
                "dbo.ShoppingLists",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Items", "ShoppingList_Id", "dbo.ShoppingLists");
            DropIndex("dbo.Items", new[] { "ShoppingList_Id" });
            DropTable("dbo.ShoppingLists");
            DropTable("dbo.Items");
        }
    }
}
