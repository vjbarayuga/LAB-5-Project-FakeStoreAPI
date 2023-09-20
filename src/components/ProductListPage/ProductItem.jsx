import React from 'react';

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className="border-2 rounded-lg mx-5 my-3 p-2 bg-grey-500 shadow-lg shadow-grey-500/50 items-stretch">
      <img src={product.image} alt={product.title} className="aspect-square mb-4 rounded-lg p-10 transition-transform duration-300 ease-in-out hover:-translate-y-3 cursor-pointer" />
      <h3 className="text-lg text-black font-bold">{product.title}</h3>
      <p className="text-black mt-2 p-2 rounded overflow-y-auto h-28">{product.description}</p>
      <div className="flex items-end justify-between mt-3">
        <span className="font-bold text-purple-600">${product.price.toFixed(2)}</span>
        <button
          onClick={() => addToCart(product)}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-cursor-pointercursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem