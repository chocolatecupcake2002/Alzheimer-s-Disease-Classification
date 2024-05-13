# Alzheimer's Disease Detection Web Application

## Introduction

This repository contains the code for an Alzheimer's Disease (AD) detection web application. The goal of this project is to utilize deep learning techniques to detect Alzheimer's disease using Magnetic Resonance Imaging (MRI) data.

## Features

- Clinicians can upload MRI images for analysis based on the trained VGG-16 model.
- The web application raises awareness for Alzheimer's disease by providing a user-friendly interface for image analysis.

## Frontend to Backend Communication

Upon image upload, the frontend of the web application sends a POST request to the backend API endpoint, transmitting the image data for analysis. This communication between the frontend and backend initiates the analysis process using the VGG-16 CNN model.

## Backend

- The endpoint receives the image file through a GET request and verifies that the uploaded image is in the correct format, typically DICOM format, ensuring it meets quality standards.
- Resizing the image to a standardized resolution of 224x224 pixels, as required by the VGG-16 model for efficient analysis.
- Converting the image to an array format compatible with the input shape expected by the VGG-16 model.
- The pre-trained VGG-16 CNN model, stored in H5 format, is loaded into the backend.
- The H5 format preserves the architecture and weights of the neural network, allowing it to be easily loaded and used for image classification.

## Technologies Used

- Frontend: React Vite
- Backend: Flask
- Deep Learning Model: VGG-16

## Installation

1. Clone the repository:

git clone https://github.com/chocolatecupcake2002/Alzheimer-s-Disease-Classification.git


2. Install dependencies:

cd ../backend
pip install flask
pip install tensorflow
pip install numpy
pip install pillow
pip install scikit-learn    

cd alzheimers-detection/frontend
npm install @vitejs/plugin-react
npm install @vitejs/plugin-vue
npm install @vitejs/plugin-vue-jsx
npm install @vitejs/plugin-legacy
npm install react
npm install react-dom
npm install react-router-dom
npm install @mui/material
npm install @emotion/react
npm install @emotion/styled
npm install axios    


## Usage

1. Start the backend server:
run detect.py

3. Start the frontend server:
npm run dev


3. Open your web browser and go to `http://localhost:3000` to access the web application.

## Contributors

- [Aishwarya](https://github.com/chocolatecupcake2002)
- [Sarath Chandra](https://github.com/Sarathchandra1202)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.





