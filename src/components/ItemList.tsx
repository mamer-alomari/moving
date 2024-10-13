import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface Item {
  id: string;
  name: string;
  size: string;
}

interface ItemListProps {
  onItemsSelected: (items: string[]) => void;
}

const mockItems: Item[] = [
  { id: '1', name: 'Arm Chairs', size: 'Small' },
  { id: '2', name: '3 Seater Sofa', size: 'Large' },
  { id: '3', name: 'Desk Lamp', size: 'Room - Medium' },
  { id: '4', name: 'Throw Pillows', size: 'Medium' },
];

const ItemList: React.FC<ItemListProps> = ({ onItemsSelected }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const toggleItem = (itemId: string) => {
    setSelectedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const handleSubmit = () => {
    onItemsSelected(selectedItems);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Select Items</h2>
      <ul className="space-y-4">
        {mockItems.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between p-4 bg-white rounded-lg shadow"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.size}</p>
            </div>
            <button
              onClick={() => toggleItem(item.id)}
              className={`p-2 rounded-full ${
                selectedItems.includes(item.id)
                  ? 'bg-red-500 text-white'
                  : 'bg-green-500 text-white'
              }`}
            >
              {selectedItems.includes(item.id) ? (
                <Minus size={16} />
              ) : (
                <Plus size={16} />
              )}
            </button>
          </li>
        ))}
      </ul>
      <button
        onClick={handleSubmit}
        className="w-full mt-4 bg-blue-500 text-white py-2 px-4 rounded-lg"
      >
        View Cart ({selectedItems.length})
      </button>
    </div>
  );
};

export default ItemList;