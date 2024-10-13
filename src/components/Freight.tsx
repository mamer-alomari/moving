import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface FreightProps {
  addresses: {
    source: string;
    destination: string;
  };
  onProceedToSignIn: (amount: number) => void;
}

const Freight: React.FC<FreightProps> = ({ addresses, onProceedToSignIn }) => {
  const freightCost = 1200.00; // This should be calculated based on the addresses and items

  return (
    <div className="max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <ArrowLeft className="mr-2" />
        <h2 className="text-2xl font-bold">Freight</h2>
      </div>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <div className="flex items-start mb-4">
          <div className="mr-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 22C16.5 18 21 14.4183 21 10C21 5.58172 16.9706 2 12 2C7.02944 2 3 5.58172 3 10C3 14.4183 7.5 18 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h3 className="font-bold">{addresses.source}</h3>
            <p className="text-sm text-gray-500">Source Address</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold">{addresses.destination}</h3>
            <p className="text-sm text-gray-500">ETA: 1:30 hr</p>
          </div>
          <div className="text-right">
            <p className="font-bold">${freightCost.toFixed(2)}</p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Fedex_logo.svg/320px-Fedex_logo.svg.png" alt="FedEx" className="h-6" />
          </div>
        </div>
      </div>
      <button 
        className="w-full bg-black text-white py-2 px-4 rounded-lg"
        onClick={() => onProceedToSignIn(freightCost)}
      >
        Proceed to Sign In
      </button>
    </div>
  );
};

export default Freight;