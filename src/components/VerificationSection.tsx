import React from 'react';
import { UploadForm } from './UploadForm';
import { AnalysisResult } from './AnalysisResult';
import type { AnalysisResult as AnalysisResultType } from '../types';

interface Props {
  result: AnalysisResultType | null;
  error: string | null;
  isLoading: boolean;
  onSubmit: (data: FormData) => Promise<void>;
  onReset: () => void;
}

export const VerificationSection: React.FC<Props> = ({
  result,
  error,
  isLoading,
  onSubmit,
  onReset
}) => {
  return (
    <div id="verify" className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Verify Your Offer
      </h2>
      
      {error && (
        <div className="max-w-2xl mx-auto mb-6 p-4 bg-red-50 text-red-700 rounded-lg">
          {error}
        </div>
      )}
      
      {!result ? (
        <UploadForm onSubmit={onSubmit} isLoading={isLoading} />
      ) : (
        <AnalysisResult 
          result={result}
          onAnalyzeAnother={onReset}
        />
      )}
    </div>
  );
};