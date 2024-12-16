import React from 'react';
import { ShieldCheck, Sparkles, Tag, TrendingUp } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-600 via-blue-600 to-blue-500 text-white">
      <div className="container mx-auto px-4 py-20 sm:py-28">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <ShieldCheck className="h-12 w-12" />
            <span className="text-3xl font-bold tracking-tight">DealSense</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 leading-tight">
            Your AI-Powered
            <br />
            Deal Detective
          </h1>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Don't fall for fake discounts. Let our AI analyze offers and reveal the truth behind the deals.
          </p>
          <a
            href="#verify"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-full bg-white text-blue-600 hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl"
          >
            Analyze Your Offer
            <Sparkles className="ml-2 h-5 w-5" />
          </a>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              {
                icon: <Tag className="h-6 w-6" />,
                title: "Price Analysis",
                description: "Compare claimed vs real market prices"
              },
              {
                icon: <TrendingUp className="h-6 w-6" />,
                title: "Trend Detection",
                description: "Track historical pricing patterns"
              },
              {
                icon: <ShieldCheck className="h-6 w-6" />,
                title: "Smart Recommendations",
                description: "Get AI-powered buying advice"
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
                <div className="flex items-center justify-center mb-3">
                  {feature.icon}
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-blue-100">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};