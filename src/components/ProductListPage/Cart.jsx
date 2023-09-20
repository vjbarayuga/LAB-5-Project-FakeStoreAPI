import React from 'react';

const Cart = ({ cartItems, removeItem, updateQuantity, clearCart }) => {
  const cartItemTotal = cartItems.reduce((acc, item) => acc + item.price.toFixed(2) * item.quantity, 0);

  return (
    <div className="fixed right-0 top-0 p-4 mt-10 mr-5 w-4/12 bg-gray-100 h-screen overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex items-center mb-5">
            <img src={item.image} alt={item.title} className="w-4/12 h-2/12 mx-4" />
            <div>
              <h3 className="text-lg font-semibold ">{item.title}</h3>
              <p><b>Price:</b> ${item.price.toFixed(2)}</p>
              <div className="flex items-center">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-purple-600 text-white px-1 py-0.25 rounded-md mr-2"
                >
                  -
                </button>
                <span className="font-bold">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-purple-600 text-white px-1 py-0.25 rounded-md ml-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => removeItem(item.id)}
                className="bg-red-600 text-white px-2 py-1 rounded-md mt-2"
              >
                Remove
              </button>
              <p className="mt-2"><b>Total:</b> ${item.price.toFixed(2) * item.quantity}</p>
            </div>
          </div>
        ))
      )}
      {cartItems.length > 0 && (
        <>
          <button
            onClick={clearCart}
            className="bg-red-600 text-white px-4 py-2 rounded-md mt-4"
          >
            Clear Cart
          </button>
          <p className="mt-2"><b>Total Cart Price:</b> ${cartItemTotal.toFixed(2)}</p> 
        </>
      )}
    </div>
  );
};

export default Cart;
