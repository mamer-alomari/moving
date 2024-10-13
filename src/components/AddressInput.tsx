import React, { useState } from 'react';

interface AddressInputProps {
  onAddressSubmit: (addresses: { source: string; destination: string }) => void;
}

const AddressInput: React.FC<AddressInputProps> = ({ onAddressSubmit }) => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddressSubmit({ source, destination });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Enter Addresses</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="source" className="block mb-1 font-semibold">
            Source Address
          </label>
          <input
            type="text"
            id="source"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="destination" className="block mb-1 font-semibold">
            Destination Address
          </label>
          <input
            type="text"
            id="destination"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Get Freight Quote
        </button>
      </form>
    </div>
  );
};

export default AddressInput;