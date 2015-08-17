namespace ShoppingList.Repository.Mappers
{
    public interface IMapper<TModel, TEfModel>
    {
        TModel Map(TEfModel efModel);
    }
}