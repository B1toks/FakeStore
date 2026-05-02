"use client";

import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart, addToCart } from '../store/cartSlice';
import './css/Cart.css';

const Cart = () => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h1>Shopping Cart</h1>
        <p className="cart-empty">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span className="cart-item-title">{item.title}</span>
            <span className="cart-item-price">${item.price.toFixed(2)}</span>
            <span className="cart-item-qty">×{item.quantity}</span>
            <div className="cart-item-actions">
              <button onClick={() => dispatch(removeFromCart(item.id))}>−</button>
              <button onClick={() => dispatch(addToCart(item))}>+</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="cart-footer">
        <span className="cart-total">Total: ${total.toFixed(2)}</span>
        <button className="cart-clear" onClick={() => dispatch(clearCart())}>Clear Cart</button>
      </div>
    </div>
  );
};

export default Cart;
