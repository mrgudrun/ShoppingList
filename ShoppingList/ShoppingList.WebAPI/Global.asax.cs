using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using ShoppingList.Infrastructure;

namespace ShoppingList.WebAPI
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            ContainerConfig.ConfigureContainer();
            //  AreaRegistration.RegisterAllAreas();
            ////  GlobalConfiguration.Configure(WebApiConfig.Register);
            //  FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            //  RouteConfig.RegisterRoutes(RouteTable.Routes);
            //  BundleConfig.RegisterBundles(BundleTable.Bundles);

            //var validAssemblies = AppDomain.CurrentDomain.GetAssemblies().Where(a => a.FullName.StartsWith("ShoppingList.")).ToList();

            //var modulesToConfigure = from a in validAssemblies
            //                         from t in a.GetExportedTypes()
            //                         where typeof(IModuleConfiguration).IsAssignableFrom(t)
            //                         where !t.IsAbstract
            //                         select Activator.CreateInstance(t) as IModuleConfiguration;

        }
    }
}
