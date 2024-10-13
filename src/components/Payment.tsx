import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';

// Replace with your actual Stripe publishable key
const stripePromise = loadStripe('pk_test_your_publishable_key');

interface PaymentProps {
  amount: number;
  onPaymentComplete: () => void;
}

const Payment: React.FC<PaymentProps> = ({ amount, onPaymentComplete }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);
    const stripe = await stripePromise;

    if (!stripe) {
      console.error('Stripe failed to load');
      setLoading(false);
      return;
    }

    // This should be replaced with a call to your backend to create a Checkout Session
    const response = await fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    const session = await response.json();

    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });

    if (result.error) {
      console.error(result.error.message);
    } else {
      onPaymentComplete();
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">Payment</h2>
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <p className="text-lg font-semibold">Total Amount: ${amount.toFixed(2)}</p>
      </div>
      <button
        onClick={handlePayment}
        disabled={loading}
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-300"
      >
        {loading ? 'Processing...' : 'Pay with Stripe'}
      </button>
    </div>
  );
};

export default Payment;