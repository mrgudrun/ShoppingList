using System;
using ShoppingList.EFModel;
using ShoppingList.Infrastructure.Interfaces;
using ShoppingList.Repository.Mappers;

namespace ShoppingList.Repository.Repositories
{
    public class RepositoryBase<TModel, TEfModel> : IRepositoryBase<TModel>
        where TEfModel : class
    {
        private readonly IMapper<TModel, TEfModel> _mapper;

        public RepositoryBase(IMapper<TModel, TEfModel> mapper)
        {
            _mapper = mapper;
        }

        protected TModel Map(TEfModel efModel)
        {
            return _mapper.Map(efModel);
        }

        public TModel GetById(int id)
        {
            using (var dbContext = new ShoppingListContext())
            {
                var result = dbContext.Set<TEfModel>().Find(id);
                return Map(result);
            }
        }

        public virtual bool Delete(int id)
        {
            using (var dbContext = new ShoppingListContext())
            {
                try
                {
                    var result = dbContext.Set<TEfModel>().Find(id);
                    dbContext.Set<TEfModel>().Remove(result);
                    dbContext.SaveChanges();
                    return true;
                }
                catch (Exception e)
                {
                    return false;
                }
            }
        }
    }
}
