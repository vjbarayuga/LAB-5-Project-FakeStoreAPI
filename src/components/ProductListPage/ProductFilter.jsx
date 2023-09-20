import React from 'react';

const ProductFilter = ({ products, setFilteredProducts }) => {
  const handleCategoryChange = (category) => {
    if (category === 'all') {
      setFilteredProducts(products);
    } else {
      const filteredProducts = products.filter((product) => product.category === category);
      setFilteredProducts(filteredProducts);
    }
  };

  const categories = ['all', 'electronics', 'jewelery', "men's clothing", "women's clothing"];

  return (
    <nav className="flex space-x-4 mx-5">
      {categories.map((category, index) => (
        <button
          key={index}
          onClick={() => handleCategoryChange(category)}
          className="px-4 py-2 rounded-md bg-gray-200 text-black hover:bg-purple-700 hover:text-white"
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </nav>
  );
};

export default ProductFilter;


















