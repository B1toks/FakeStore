import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import productsReducer from './productsSlice';

const isBrowser = typeof window !== 'undefined';

const loadCartFromLocalStorage = () => {
  if (!isBrowser) return undefined;
  try {
    const serialized = localStorage.getItem('cart');
    return serialized ? JSON.parse(serialized) : undefined;
  } catch (e) {
    console.error('Could not load cart state:', e);
    return undefined;
  }
};

const saveCartToLocalStorage = (state) => {
  if (!isBrowser) return;
  try {
    localStorage.setItem('cart', JSON.stringify(state.cart.items));
  } catch (e) {
    console.error('Could not save cart state:', e);
  }
};

const preloadedState = {
  cart: { items: loadCartFromLocalStorage() || [] },
};

const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
  },
  preloadedState,
});

if (isBrowser) {
  store.subscribe(() => saveCartToLocalStorage(store.getState()));
}

export default store;
