
import React, { useState } from 'react';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // This would normally send to an API
      console.log('Subscribed email:', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <div className="bg-noisy-black py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">JOIN OUR NEWSLETTER</h2>
          <p className="text-gray-300 mb-8">
            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
          </p>
          {subscribed ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              Thanks for subscribing! Check your inbox soon for exclusive deals.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="px-4 py-3 w-full sm:w-72 text-gray-900 focus:ring-2 focus:ring-noisy-yellow"
                required
              />
              <button
                type="submit"
                className="bg-white text-noisy-black px-6 py-3 font-medium hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
