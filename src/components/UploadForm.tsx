import React, { useState } from 'react';
import { Upload, Link, Loader, ImagePlus } from 'lucide-react';

interface Props {
  onSubmit: (data: FormData) => Promise<void>;
  isLoading: boolean;
}

export const UploadForm: React.FC<Props> = ({ onSubmit, isLoading }) => {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file && !url) return;

    const formData = new FormData();
    if (file) formData.append('image', file);
    if (url) formData.append('url', url);

    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="border-2 border-dashed border-blue-200 rounded-xl p-8 bg-blue-50/50 hover:bg-blue-50 transition-colors">
          <input
            type="file"
            id="file-upload"
            className="hidden"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
            accept="image/*"
          />
          <label
            htmlFor="file-upload"
            className="cursor-pointer flex flex-col items-center space-y-4"
          >
            {file ? (
              <>
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <ImagePlus className="h-8 w-8 text-blue-600" />
                </div>
                <span className="text-blue-600 font-medium">{file.name}</span>
              </>
            ) : (
              <>
                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Upload className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-center">
                  <p className="text-blue-600 font-medium">Drop your screenshot here</p>
                  <p className="text-sm text-gray-500 mt-1">or click to browse</p>
                </div>
              </>
            )}
          </label>
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
            <Link className="h-5 w-5 text-blue-500" />
          </div>
          <input
            type="url"
            placeholder="Or paste product URL here"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="block w-full pl-12 pr-4 py-3 border-2 border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
        </div>

        <button
          type="submit"
          disabled={isLoading || (!file && !url)}
          className="w-full flex items-center justify-center px-6 py-4 text-lg font-semibold rounded-xl text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
        >
          {isLoading ? (
            <>
              <Loader className="animate-spin -ml-1 mr-3 h-5 w-5" />
              Analyzing Offer...
            </>
          ) : (
            'Analyze Now'
          )}
        </button>
      </div>
    </form>
  );
};