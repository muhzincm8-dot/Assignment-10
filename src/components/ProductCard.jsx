const ProductCard = ({ product, onAdd }) => {
  return (
    <div className="border rounded-xl p-4 hover:shadow-lg transition shadow-xl/30">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-80 object-cover rounded "
      />
      {/* product name */}
      <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
      {/* product prise */}
      <p className="text-gray-700">₹{product.price}</p>
      {/* product category */}
      <p className="text-gray-500 text-sm">{product.category}</p>
      {/* product rating */}
      <p className="text-yellow-500 font-bold">⭐ {product.rating}</p>

      {/* add to cart button */}
      <button
        onClick={() => onAdd(product.name)}
        className="mt-3 w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded inset-shadow-sm inset-shadow-blue-900 shadow-xl/20"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
