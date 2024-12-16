import type { AnalysisResult, OfferInput } from '../types';

// Mock product database
const mockProducts = [
  { name: 'Smartphone', basePrice: 29999, commonPrice: 27999 },
  { name: 'Headphones', basePrice: 2499, commonPrice: 1999 },
  { name: 'Laptop', basePrice: 89999, commonPrice: 84999 },
  { name: 'Smart Watch', basePrice: 4999, commonPrice: 3999 },
  { name: 'Coffee Maker', basePrice: 3499, commonPrice: 2999 }
];

const getRandomProduct = () => {
  return mockProducts[Math.floor(Math.random() * mockProducts.length)];
};

const calculateDiscounts = (basePrice: number, commonPrice: number) => {
  const claimedDiscount = Math.floor(Math.random() * 30) + 20; // 20-50% claimed discount
  const actualPrice = commonPrice * (1 - (Math.random() * 0.2)); // 0-20% off common price
  const actualDiscount = Math.floor((basePrice - actualPrice) / basePrice * 100);
  const inflationPercentage = Math.random() > 0.5 ? Math.floor(Math.random() * 20) : 0;

  return {
    claimedDiscount,
    actualDiscount,
    inflationPercentage,
    marketPrice: Math.floor(actualPrice)
  };
};

const getRecommendation = (
  isGenuine: boolean,
  inflationPercentage: number,
  claimedDiscount: number,
  actualDiscount: number
): string => {
  if (inflationPercentage > 0) {
    return `The original price appears to be inflated by ${inflationPercentage}%. The actual savings are lower than advertised.`;
  }
  
  if (isGenuine) {
    return "This appears to be a legitimate offer with fair market pricing.";
  }
  
  if (claimedDiscount - actualDiscount > 15) {
    return "The claimed discount is significantly higher than the actual market savings. Consider comparing prices across different platforms.";
  }
  
  return "While the discount is real, you might find better deals during major sale events.";
};

export const analyzeOffer = async (input: OfferInput): Promise<AnalysisResult> => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  const product = getRandomProduct();
  const isGenuine = Math.random() > 0.3; // 70% chance of genuine offer
  
  const {
    claimedDiscount,
    actualDiscount,
    inflationPercentage,
    marketPrice
  } = calculateDiscounts(product.basePrice, product.commonPrice);
  
  const recommendation = getRecommendation(
    isGenuine,
    inflationPercentage,
    claimedDiscount,
    actualDiscount
  );

  return {
    isGenuine,
    claimedDiscount,
    actualDiscount,
    marketPrice,
    inflationPercentage,
    recommendation,
    confidence: 0.7 + Math.random() * 0.2 // 70-90% confidence
  };
};