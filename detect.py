from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image as kp_image
import numpy as np
from PIL import Image
from flask import Flask
from flask_cors import CORS


app = Flask(__name__)
CORS(app)


model = load_model("/Users/aishu/Desktop/project/VGG16.h5")


def preprocess_uploaded_image(image_file, target_size=(224, 224)):
    img = Image.open(image_file)
    # Convert to RGB if the image mode is not RGB
    if img.mode != "RGB":
        img = img.convert("RGB")
    img = img.resize(target_size)
    img_array = kp_image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)
    return img_array


def classify_uploaded_image(image_file):
    preprocessed_image = preprocess_uploaded_image(image_file)
    prediction = model.predict(preprocessed_image)
    predicted_class_index = np.argmax(prediction)
    classes = ['MildDemented', 'ModerateDemented', 'NonDemented', 'VeryMildDemented']
    predicted_class = classes[predicted_class_index]
    return predicted_class


@app.route("/classify", methods=["POST"])
def classify_image():
    if "file" not in request.files:
        return jsonify({"error": "No file part"})
    
    file = request.files["file"]
    
    if file.filename == "":
        return jsonify({"error": "No selected file"})
    
    try:
        result = classify_uploaded_image(file)
        return jsonify({"result": result})
    except Exception as e:
        return jsonify({"error": str(e)})


if __name__ == "__main__":
    app.run(debug=True)
