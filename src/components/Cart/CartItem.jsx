import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';

export function CartItem({ id, name, price, quantity, stock, image, onUpdateQuantity, onRemove }) {
  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-200">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{name}</h3>
        <p className="text-gray-600">{price.toFixed(2)} €</p>
        
        <div className="flex items-center gap-2 mt-2">
          <button
            onClick={() => onUpdateQuantity(id, quantity - 1)}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
            aria-label="Diminuer la quantité"
          >
            <Minus size={16} />
          </button>
          
          <span className="w-8 text-center">{quantity}</span>
          
          <button
            onClick={() => onUpdateQuantity(id, quantity + 1)}
            className="p-1 hover:bg-gray-100 rounded disabled:opacity-50"
            disabled={quantity >= stock}
            aria-label="Augmenter la quantité"
          >
            <Plus size={16} />
          </button>

          {quantity >= stock && (
            <span className="text-xs text-red-500 ml-2">
              Stock maximum atteint
            </span>
          )}
        </div>
      </div>
      
      <div className="text-right">
        <p className="font-medium text-gray-900">
          {(price * quantity).toFixed(2)} €
        </p>
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:text-red-700 mt-2 flex items-center gap-1"
          aria-label="Supprimer l'article"
        >
          <Trash2 size={16} />
          <span>Supprimer</span>
        </button>
      </div>
    </div>
  );
}