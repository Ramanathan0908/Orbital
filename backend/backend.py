import time
from flask import Flask, request, jsonify
from simplet5 import SimpleT5

app = Flask(__name__)
# Create model
model = SimpleT5() 
# Load model parameters
model.load_model("t5", "backend/simplet5model", use_gpu=True)

@app.route('/summarize', methods=['POST'])
def add():
    data = request.get_json()
    # Get summary
    summary = model.predict("summarize: " + data)

    return jsonify({ 'summary': summary })