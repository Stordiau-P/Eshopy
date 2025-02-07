import React from 'react';
import productsData from '../data/products.json';
import { useCart } from './CartProvider';

export function Products() {
  const { cartItems, addToCart } = useCart();

  return (
    <main className="flex-grow">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Équipement Gaming</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.products.map((product) => {
            const cartItem = cartItems.find(item => item.id === product.id);
            const remainingStock = product.stock - (cartItem?.quantity || 0);

            return (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-xl font-bold text-indigo-600">{product.price} €</p>
                    <p className={`text-sm ${remainingStock <= 5 ? 'text-red-500' : 'text-green-500'}`}>
                      {remainingStock} en stock
                    </p>
                  </div>
                  <button
                    className={`mt-4 w-full py-2 px-4 rounded-md transition-colors ${
                      remainingStock === 0 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                    }`}
                    onClick={() => remainingStock > 0 && addToCart(product.id)}
                    disabled={remainingStock === 0}
                  >
                    {remainingStock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}