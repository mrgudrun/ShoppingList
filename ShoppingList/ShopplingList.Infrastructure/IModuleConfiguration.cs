
using SimpleInjector;

namespace ShoppingList.Infrastructure
{
    public interface IModuleConfiguration
    {
        void Configure(Container container);
    }
}