import React, { useState } from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  onUploadComplete: () => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onUploadComplete }) => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (image) {
      // TODO: Implement API call to segment and label the image
      console.log('Uploading image:', image.name);
      // Simulating API call
      setTimeout(() => {
        onUploadComplete();
      }, 2000);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-bold mb-4">Upload an Image</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label htmlFor="image-upload" className="cursor-pointer flex items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg">
            <input
              id="image-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
            <div className="text-center">
              <Upload className="mx-auto mb-2" />
              <p>{image ? image.name : 'Click to upload or drag and drop'}</p>
            </div>
          </label>
        </div>
        <button
          type="submit"
          disabled={!image}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg disabled:bg-gray-300"
        >
          Upload and Analyze
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;