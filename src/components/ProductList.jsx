import { useState } from "react";
import products from "../data/product";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortOption, setSortOption] = useState("");

  // console loging product name when add to cart button clicked
  const handleAddToCart = (productName) => {
    console.log("Added to cart:", productName);
  };

  // filter search
  let filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.category.toLowerCase().includes(search.toLowerCase())
  );

  // category search
  if (category !== "All") {
    filteredProducts = filteredProducts.filter(
      (item) => item.category === category
    );
  }

  // Sorting the list  from high to low
  if (sortOption === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sortOption === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  if (sortOption === "rating") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <div className="p-6  ">
      {/* Input search  */}
    <div className="flex items-center justify-center">
      <input
      name="filter"
        type="text"
        placeholder="Filter products by name/category..."
        className="border p-2 rounded mb-4 w-[400px] shadow-xl/30 "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      <div className="flex gap-4 mb-4 justify-center items-center">
        {/* vategory filtering  */}
        <select 
        name="all"
          className="border p-2 rounded shadow-lg shadow-blue-600/50"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Fashion">Fashion</option>
          <option value="Electronics">Electronics</option>
        </select>

        <select
        name="sort"
          className="border p-2 rounded shadow-lg shadow-blue-600/50"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="low-high">Price: Low to High</option>
          <option value="high-low">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>

      {/* product card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((e) => (
          <ProductCard key={e.id} product={e} onAdd={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
