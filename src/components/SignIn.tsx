import React, { useState } from 'react';
import { User, Lock, Mail, Facebook } from 'lucide-react';

interface SignInProps {
  onSignInComplete: () => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignInComplete }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`${isSignUp ? 'Signing up' : 'Signing in'} with:`, email);
    onSignInComplete();
  };

  const handleSocialLogin = (provider: 'Gmail' | 'Facebook') => {
    console.log(`Logging in with ${provider}`);
    // TODO: Implement actual social login logic here
    onSignInComplete();
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{isSignUp ? 'Sign Up' : 'Sign In'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="relative">
          <Lock className="absolute top-3 left-3 text-gray-400" size={20} />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {isSignUp ? 'Sign Up' : 'Sign In'}
        </button>
      </form>
      <div className="mt-4">
        <p className="text-center text-sm text-gray-600 mb-2">Or continue with</p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleSocialLogin('Gmail')}
            className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <Mail className="mr-2" size={20} />
            Gmail
          </button>
          <button
            onClick={() => handleSocialLogin('Facebook')}
            className="flex items-center justify-center w-1/2 py-2 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200"
          >
            <Facebook className="mr-2" size={20} />
            Facebook
          </button>
        </div>
      </div>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">
          {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline"
          >
            {isSignUp ? 'Sign In' : 'Sign Up'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignIn;