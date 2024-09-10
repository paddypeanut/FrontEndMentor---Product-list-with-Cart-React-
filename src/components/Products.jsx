import ProductCard from './ProductCard';

export default function Products({ products }) {

  return (
    <>
      <div className="mb-8">
        <h1 className="font-bold  text-4xl my-8">Desserts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 list-none">
          {products.map((item, index) => (
            <ProductCard 
              item={item}
              key={item.name}
            />
          ))}
        </div>
      </div>
    </>
  );
}
