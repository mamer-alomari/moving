import React from 'react';
import { Minus, Plus, X } from 'lucide-react';

interface CartProps {
  items: string[];
  onCheckout: () => void;
}

const mockItems = [
  { id: '1', name: 'Arm Chairs', size: 'Small', price: 299.99 },
  { id: '2', name: '3 Seater Sofa', size: 'Large', price: 799.99 },
];

const Cart: React.FC<CartProps> = ({ items, onCheckout }) => {
  const cartItems = mockItems.filter((item) => items.includes(item.id));

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      <ul className="space-y-4">
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div className="flex items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mr-4"></div>
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.size}</p>
              </div>
            </div>
            <div className="flex items-center">
              <button className="p-1 rounded-full bg-gray-200">
                <Minus size={16} />
              </button>
              <span className="mx-2">1</span>
              <button className="p-1 rounded-full bg-gray-200">
                <Plus size={16} />
              </button>
              <button className="ml-4">
                <X size={16} />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 p-4 bg-white rounded-lg shadow">
        <div className="flex justify-between mb-2">
          <span>Subtotal</span>
          <span>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-bold">
          <span>Total</span>
          <span>${cartItems.reduce((sum, item) => sum + item.price, 0).toFixed(2)}</span>
        </div>
      </div>
      <button
        onClick={onCheckout}
        className="w-full mt-4 bg-black text-white py-2 px-4 rounded-lg"
      >
        Get Quote
      </button>
    </div>
  );
};

export default Cart;