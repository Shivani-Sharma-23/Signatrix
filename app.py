from flask import Flask, render_template, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/collect-images', methods=['POST'])
def collect_images():
    subprocess.run(['python', 'image_generator.py'])
    return jsonify({"message": "Images collected successfully"}), 200

@app.route('/create-dataset', methods=['POST'])
def create_dataset():
    subprocess.run(['python', 'dataset.py'])
    return jsonify({"message": "Dataset created successfully"}), 200

@app.route('/train-classifier', methods=['POST'])
def train_classifier():
    subprocess.run(['python', 'train_classifier.py'])
    return jsonify({"message": "Classifier trained successfully"}), 200

@app.route('/inference', methods=['POST'])
def inference():
    subprocess.run(['python', 'classifier.py'])
    return jsonify({"message": "Inference completed successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True)
