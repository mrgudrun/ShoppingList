using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using ShoppingList.Infrastructure;
using SimpleInjector;
using SimpleInjector.Integration.WebApi;

namespace ShoppingList.WebAPI
{
    public class ContainerConfig
    {
        public static void ConfigureContainer()
        {
            var container = new Container();

            // This is an extension method from the integration package
            container.RegisterWebApiControllers(GlobalConfiguration.Configuration);

            var validAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(a => a.FullName.StartsWith("ShoppingList.")).ToList();

            var modulesToConfigure = from a in validAssemblies
                                     from t in a.GetExportedTypes()
                                     where typeof(IModuleConfiguration).IsAssignableFrom(t)
                                     where !t.IsAbstract
                                     select Activator.CreateInstance(t) as IModuleConfiguration;

            // Invoke configuration
            foreach (var module in modulesToConfigure)
                module.Configure(container);

            // Verify all configured injections
            container.Verify();

            // Register SimpleInjector as the default dependency resolver
            GlobalConfiguration.Configuration.DependencyResolver =
                new SimpleInjectorWebApiDependencyResolver(container);

            // Register WebApi
            GlobalConfiguration.Configure(WebApiConfig.Register);

            // Register area for help pages
            AreaRegistration.RegisterAllAreas();
        }
    }
}