import React from 'react';
import { Hero } from './components/Hero';
import { UploadForm } from './components/UploadForm';
import { AnalysisResult } from './components/AnalysisResult';
import { useAnalysis } from './hooks/useAnalysis';
import { Footer } from './components/Footer';
import { VerificationSection } from './components/VerificationSection';

const App: React.FC = () => {
  const { result, isLoading, error, analyze, reset } = useAnalysis();

  const handleSubmit = async (formData: FormData) => {
    const input = {
      imageFile: formData.get('image') as File,
      productUrl: formData.get('url') as string
    };
    
    await analyze(input);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      <VerificationSection 
        result={result}
        error={error}
        isLoading={isLoading}
        onSubmit={handleSubmit}
        onReset={reset}
      />
      <Footer />
    </div>
  );
};

export default App;