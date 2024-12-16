export interface AnalysisResult {
  isGenuine: boolean;
  claimedDiscount: number;
  actualDiscount: number;
  marketPrice: number;
  inflationPercentage: number;
  recommendation: string;
  confidence: number;
}

export interface OfferInput {
  imageFile?: File;
  productUrl?: string;
}