"use client";

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../store/productsSlice';
import { addToCart } from '../store/cartSlice';
import './css/ProductCatalog.css';

const ProductCatalog = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.list);

  useEffect(() => {
    if (products.length > 0) return;
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      dispatch(setProducts(data));
    };
    fetchProducts();
  }, [dispatch, products.length]);

  return (
    <section>
      <h1>Product Catalog</h1>
      <div className="product-catalog">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const [bought, setBought] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => () => clearTimeout(timerRef.current), []);

  const handleAdd = () => {
    dispatch(addToCart(product));
    setBought(true);
    clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setBought(false), 2000);
  };

  return (
    <article className="product">
      <div className="product-image">
        <Image
          src={product.image}
          alt={product.title}
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
      </div>
      <h2>{product.title}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button
        onClick={handleAdd}
        className={bought ? 'product-buy bought' : 'product-buy'}
        disabled={bought}
      >
        {bought ? '✓ Куплено!' : 'Add to Cart'}
      </button>
    </article>
  );
};

export default ProductCatalog;
