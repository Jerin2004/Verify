import React from 'react';
import { Check, AlertTriangle, TrendingUp, Share2 } from 'lucide-react';
import type { AnalysisResult } from '../types';

interface Props {
  result: AnalysisResult;
  onAnalyzeAnother: () => void;
}

export const AnalysisResult: React.FC<Props> = ({ result, onAnalyzeAnother }) => {
  const isGenuine = result.isGenuine;

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-center mb-6">
        {isGenuine ? (
          <div className="bg-green-100 p-3 rounded-full">
            <Check className="h-8 w-8 text-green-600" />
          </div>
        ) : (
          <div className="bg-yellow-100 p-3 rounded-full">
            <AlertTriangle className="h-8 w-8 text-yellow-600" />
          </div>
        )}
      </div>

      <h3 className="text-2xl font-bold text-center mb-6">
        {isGenuine ? 'This is a Genuine Offer!' : 'Be Cautious About This Offer'}
      </h3>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-600">Claimed Discount</span>
          <span className="font-semibold">{result.claimedDiscount}%</span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-600">Actual Discount</span>
          <span className="font-semibold">{result.actualDiscount}%</span>
        </div>
        <div className="flex justify-between p-3 bg-gray-50 rounded">
          <span className="text-gray-600">Market Price</span>
          <span className="font-semibold">₹{result.marketPrice}</span>
        </div>
        {result.inflationPercentage > 0 && (
          <div className="flex justify-between p-3 bg-red-50 rounded">
            <span className="text-red-600">Price Inflation</span>
            <span className="font-semibold text-red-600">
              {result.inflationPercentage}%
            </span>
          </div>
        )}
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <div className="flex items-start">
          <TrendingUp className="h-5 w-5 text-blue-600 mt-1 mr-2" />
          <p className="text-blue-800">{result.recommendation}</p>
        </div>
      </div>

      <div className="flex space-x-4">
        <button
          onClick={onAnalyzeAnother}
          className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Analyze Another Offer
        </button>
        <button
          onClick={() => {
            // Share functionality would go here
          }}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          <Share2 className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};