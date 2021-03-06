﻿using ShoppingList.Infrastructure;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Repository.Repositories;
using SimpleInjector;

namespace ShoppingList.Repository
{
    public class ModuleConfiguration : IModuleConfiguration
    {
        public void Configure(Container container)
        {
            container.RegisterSingleton<IUserRepository, UserRespository>(); 
            container.RegisterSingleton<IShoppingItemRepository, ShoppingItemRepository>(); 
            container.RegisterSingleton<IShoppingListRepository, ShoppingListRepository>();
            container.RegisterSingleton<IFriendRepository, FriendRepository>();
        }
    }
}
