namespace ShoppingList.EFModel.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddedFriend : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Friends",
                c => new
                    {
                        Id = c.Int(nullable: false, identity: true),
                        UserId = c.Int(nullable: false),
                        UserFriendId = c.Int(nullable: false),
                        User_Id = c.Int(),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.User_Id)
                .ForeignKey("dbo.Users", t => t.UserId, cascadeDelete: false)
                .ForeignKey("dbo.Users", t => t.UserFriendId, cascadeDelete: false)
                .Index(t => t.UserId)
                .Index(t => t.UserFriendId)
                .Index(t => t.User_Id);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Friends", "UserFriendId", "dbo.Users");
            DropForeignKey("dbo.Friends", "UserId", "dbo.Users");
            DropForeignKey("dbo.Friends", "User_Id", "dbo.Users");
            DropIndex("dbo.Friends", new[] { "User_Id" });
            DropIndex("dbo.Friends", new[] { "UserFriendId" });
            DropIndex("dbo.Friends", new[] { "UserId" });
            DropTable("dbo.Friends");
        }
    }
}
