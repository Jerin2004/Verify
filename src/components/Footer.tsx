import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-semibold text-blue-600">DealSense</span>
            <span className="text-gray-500">© 2024 by Jerin J Abraham</span>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
};