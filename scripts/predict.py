import sys
import os
import numpy as np
import joblib
from skimage import io, feature, color, transform

def extract_features(image_path):
    # Read the image
    image = io.imread(image_path)
    
    # Convert to grayscale if color
    if len(image.shape) == 3:
        gray_image = color.rgb2gray(image)
    else:
        gray_image = image
    
    # Resize image to a standard size
    resized_image = transform.resize(gray_image, (128, 128))
    
    # HOG feature extraction
    hog_features = feature.hog(
        resized_image, 
        orientations=9, 
        pixels_per_cell=(16, 16),
        cells_per_block=(2, 2)
    )
    
    return np.array(hog_features)

def predict(image_path, model_path='plant_disease_model'):
    # Load model and scaler
    classifier = joblib.load(f'{model_path}_classifier.joblib')
    scaler = joblib.load(f'{model_path}_scaler.joblib')
    
    # Extract features
    features = extract_features(image_path)
    
    # Scale features
    features_scaled = scaler.transform([features])
    
    # Predict
    prediction = classifier.predict(features_scaled)[0]
    probability = classifier.predict_proba(features_scaled)[0]
    
    status = 'Diseased' if prediction == 1 else 'Healthy'
    confidence = probability[1] if prediction == 1 else probability[0]
    
    return status, confidence

if __name__ == "__main__":
    image_path = sys.argv[1]
    model_path = sys.argv[2] if len(sys.argv) > 2 else 'plant_disease_model'
    
    status, confidence = predict(image_path, model_path)
    print(f"{status},{confidence}")

