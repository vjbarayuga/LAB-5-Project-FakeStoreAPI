import React from 'react';
import ProductListPage from './components/ProductListPage/ProductListPage';

const App = () => {
  return (
    <div className='font-Kanit'>
      <h2 className="flex bg-purple-700 text-white h-10 justify-center items-center">
        🌞 Up to 50% OFF on Fashion Essentials - Upgrade your wardrobe with the latest styles and trends without breaking the bank!
      </h2>
      <ProductListPage />
    </div>
  );
};

export default App;
