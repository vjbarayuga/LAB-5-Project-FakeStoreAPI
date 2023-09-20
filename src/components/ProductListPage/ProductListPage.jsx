import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { RiShoppingCart2Line } from 'react-icons/ri';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';
import ProductItem from './ProductItem';
import Cart from './Cart';
import ProductFilter from './ProductFilter';
import logo from '../../asset/logo.png'

const ProductListPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    // Calculate the total cart count
    const totalCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCartCount(totalCount);
  }, [cartItems]);

  const addToCart = (product) => {
    const existingCartItem = cartItems.find((item) => item.id === product.id);

    if (existingCartItem) {
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = cartItems.map((item) => (item.id === product.id ? updatedCartItem : item));
      setCartItems(updatedCartItems);
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItem = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) => (item.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const handleCartIconClick = () => {
    setShowCart((prevState) => !prevState);
  };

  return (
    <div>
      <div className='flex justify-between items-center my-5 mx-5'>
        <img src={logo} alt='' className='h-10'/>
        <span className="mr-10 relative">
          <RiShoppingCart2Line size={24} onClick={handleCartIconClick} className='text-purple-700' />
          {cartCount > 0 && !showCart && (
            <span className="absolute bottom-2 left-5 bg-red-500 rounded-full w-5 h-5 m-1 pl-1.5 text-white text-xs">
              {cartCount}
            </span>
          )}
        </span>
      </div>
      {loading ? (
        <SkeletonLoader />
      ) : (
        <>
          <ProductFilter products={products} setFilteredProducts={setFilteredProducts} />
          <div className="grid grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductItem key={product.id} product={product} addToCart={addToCart} />
            ))}
          </div>
          {showCart && (
            <Cart cartItems={cartItems} removeItem={removeItem} updateQuantity={updateQuantity} clearCart={clearCart} />
          )}
        </>
      )}
    </div>
  );
};

export default ProductListPage;
