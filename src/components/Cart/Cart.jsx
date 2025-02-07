import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { CartItem } from './CartItem';
import { useCart } from '../CartProvider';

export function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, updateCartItemQuantity, removeCartItem } = useCart();

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = cartItems.length > 0 ? 10 : 0;
  const tax = subtotal * 0.21; // 21% TVA belge
  const total = subtotal + shipping + tax;

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        aria-label="Ouvrir le panier"
      >
        <div className="relative">
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={() => setIsOpen(false)} />
          
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md">
              <div className="h-full flex flex-col bg-white shadow-xl">
                <div className="px-4 py-6 bg-gray-50 sm:px-6">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-medium text-gray-900">Panier</h2>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="text-gray-400 hover:text-gray-500"
                      aria-label="Fermer le panier"
                    >
                      <X size={24} />
                    </button>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <div className="px-4 sm:px-6">
                    {cartItems.length === 0 ? (
                      <p className="py-6 text-center text-gray-500">
                        Votre panier est vide
                      </p>
                    ) : (
                      cartItems.map(item => (
                        <CartItem
                          key={item.id}
                          {...item}
                          onUpdateQuantity={updateCartItemQuantity}
                          onRemove={removeCartItem}
                        />
                      ))
                    )}
                  </div>
                </div>

                {cartItems.length > 0 && (
                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="space-y-4">
                      <div className="flex justify-between text-base text-gray-900">
                        <p>Sous-total</p>
                        <p>{subtotal.toFixed(2)} €</p>
                      </div>
                      <div className="flex justify-between text-base text-gray-900">
                        <p>Livraison</p>
                        <p>{shipping.toFixed(2)} €</p>
                      </div>
                      <div className="flex justify-between text-base text-gray-900">
                        <p>TVA (21%)</p>
                        <p>{tax.toFixed(2)} €</p>
                      </div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Total</p>
                        <p>{total.toFixed(2)} €</p>
                      </div>
                    </div>

                    <button
                      className="mt-6 w-full bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 rounded-md"
                      onClick={() => {
                        alert('Merci pour votre commande !');
                        setIsOpen(false);
                      }}
                    >
                      Commander
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}