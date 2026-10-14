import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const products = [
    {
      name: "ASUS ROG Strix",
      price: "₹89,999",
      rating: 4.8,
    },
    {
      name: "iPhone 16 Pro",
      price: "₹1,19,900",
      rating: 4.8,
    },
    {
      name: "Sony Headphones",
      price: "₹24,999",
      rating: 4.7,
    },
    {
      name: "Logitech Gaming Mouse",
      price: "₹5,499",
      rating: 4.6,
    },
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="mb-8 text-3xl font-bold text-gray-900">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard
            key={product.name}
            name={product.name}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;