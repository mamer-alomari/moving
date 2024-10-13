import React, { useState } from 'react';
import { Upload, ShoppingCart, ArrowRight } from 'lucide-react';
import ImageUpload from './components/ImageUpload';
import ItemList from './components/ItemList';
import Cart from './components/Cart';
import AddressInput from './components/AddressInput';
import Freight from './components/Freight';
import SignIn from './components/SignIn';
import Payment from './components/Payment';

type AppState = 'upload' | 'select' | 'cart' | 'address' | 'freight' | 'signin' | 'payment';

interface Address {
  source: string;
  destination: string;
}

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('upload');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [addresses, setAddresses] = useState<Address>({ source: '', destination: '' });
  const [totalAmount, setTotalAmount] = useState(0);

  const renderContent = () => {
    switch (appState) {
      case 'upload':
        return <ImageUpload onUploadComplete={() => setAppState('select')} />;
      case 'select':
        return <ItemList onItemsSelected={(items) => {
          setSelectedItems(items);
          setAppState('cart');
        }} />;
      case 'cart':
        return <Cart items={selectedItems} onCheckout={() => setAppState('address')} />;
      case 'address':
        return <AddressInput onAddressSubmit={(addr) => {
          setAddresses(addr);
          setAppState('freight');
        }} />;
      case 'freight':
        return <Freight 
          addresses={addresses}
          onProceedToSignIn={(amount) => {
            setTotalAmount(amount);
            setAppState('signin');
          }}
        />;
      case 'signin':
        return <SignIn onSignInComplete={() => setAppState('payment')} />;
      case 'payment':
        return <Payment 
          amount={totalAmount} 
          onPaymentComplete={() => {
            // Handle payment completion (e.g., show a success message, reset state, etc.)
            console.log('Payment completed');
          }} 
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">moove</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {renderContent()}
      </main>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2023 moove. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;