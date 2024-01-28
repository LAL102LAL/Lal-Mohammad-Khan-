import React from 'react';

const Cartoon = ({ cartItems, removeFromCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems && cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <strong>{item.name}</strong> - Price: ${item.price} - Quantity: {item.quantity}
              <button onClick={() => removeFromCart(item.id)}>Remove from Cart</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cartoon;
