import React, { useState } from 'react';
import './ImageUploader.css'; // Import CSS file
import './feedback.css'; // Import CSS file
const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [predictionResult, setPredictionResult] = useState(null);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPredictionResult(null); // Reset prediction result when a new image is selected
    }
  };

  // Function to handle image removal
  const handleRemoveImage = () => {
    setSelectedImage(null);
    setPredictionResult(null); // Reset prediction result when image is removed
  };

  // Function to handle image upload
  const handleUpload = async () => {
    if (!selectedImage) return;

    const formData = new FormData();
    formData.append('file', selectedImage);

    try {
      const response = await fetch('http://127.0.0.1:5000/classify', {
        method: 'POST',
        body: formData
      });
  
      if (response.ok) {
        const data = await response.json();
        console.log('Data received from server:', data); // Print received data
        setPredictionResult(data.result);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
  <div className='w-full bg-feed py-32'>
    <div className="image-uploader-container">
      {/* Dotted box for uploading image */}
      <label htmlFor="file-input" className="upload-box">
        {selectedImage ? (
          <img src={URL.createObjectURL(selectedImage)} alt="Selected" className="preview-image" />
        ) : (
          <div className="upload-placeholder">Upload image here</div>
        )}
      </label>
      {/* Dotted box for displaying uploaded image */}
      {selectedImage && (
        <div className="upload-section">
          <label htmlFor="file-input" className="upload-box1">
            <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" className="preview-image" />
          </label>
        </div>
      )}

      {/* Actual input for selecting images */}
      <input type="file" id="file-input" accept="image/*" onChange={handleImageChange} className="file-input" style={{ display: 'none' }} />

      {/* Remove image button */}
      {selectedImage && <button onClick={handleRemoveImage} className="remove-image-button">Remove Image</button>}

      {/* Button to trigger image upload */}
      {selectedImage && <button onClick={handleUpload} className="upload-button">Upload Image</button>}

      {/* Display prediction result */}
      {predictionResult && (
        <div className="prediction-result-box">
          <p className="prediction-result-text">Prediction: {predictionResult}</p>
        </div>
      )}

      

    </div>
  </div>
  );
};

export default ImageUploader;
