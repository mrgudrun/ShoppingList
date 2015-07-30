using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace ShoppingList.Infrastructure.Interfaces
{
    public interface IRepositoryBase<out TModel>
    {
        TModel GetById(int id);
    }
}
