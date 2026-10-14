const ProductCard = ({name,price,rating}) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Name */}
      <h3 className="mt-4 text-xl font-bold text-gray-900">
        {name}
      </h3>

      {/* Product Price */}
      <p className="mt-2 text-lg font-semibold text-green-600">
        {price}
      </p>

      {/* Product Rating */}
      <p className="mt-2 text-sm text-gray-600">
        {rating}
      </p>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full rounded-xl bg-gray-900 px-4 py-3 font-semibold text-white transition hover:bg-gray-700">
        Add to Cart
      </button>
      
    </div>
  );
};

export default ProductCard;