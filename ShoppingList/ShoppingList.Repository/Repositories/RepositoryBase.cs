using System;
using ShoppingList.EFModel;
using ShoppingList.Infrastructure.Interfaces;

namespace ShoppingList.Repository.Repositories
{
    public class RepositoryBase<TModel, TEfModel> : IRepositoryBase<TModel> 
        where TEfModel : class
    {
        private readonly Func<TEfModel, TModel> _mapper;

        public RepositoryBase(Func<TEfModel, TModel> mapper)
        {
            _mapper = mapper;
        }

        public TModel GetById(int id)
        {
            using (var dbContext = new ShoppingListContext())
            {
               var result = dbContext.Set<TEfModel>().Find(id);
               return _mapper(result);
            }
        }

    }
}
