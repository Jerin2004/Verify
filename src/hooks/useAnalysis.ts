import { useState } from 'react';
import { analyzeOffer } from '../services/analysis';
import type { AnalysisResult, OfferInput } from '../types';

export const useAnalysis = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const analyze = async (input: OfferInput) => {
    try {
      setIsLoading(true);
      setError(null);
      const analysisResult = await analyzeOffer(input);
      setResult(analysisResult);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred during analysis');
    } finally {
      setIsLoading(false);
    }
  };

  const reset = () => {
    setResult(null);
    setError(null);
  };

  return {
    isLoading,
    error,
    result,
    analyze,
    reset
  };
};