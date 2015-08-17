using ShoppingList.Infrastructure;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Repository.Repositories;
using SimpleInjector;

namespace ShoppingList.Repository
{
    public class ModuleConfiguration : IModuleConfiguration
    {
        public void Configure(Container container)
        {
            container.Register<IUserRepository, UserRespository>(); 
            container.Register<IShoppingItemRepository, ShoppingItemRepository>(); 
            container.Register<IShoppingListRepository, ShoppingListRepository>(); 
        }
    }
}
