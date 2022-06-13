import time
from flask import Flask, request, jsonify
from simplet5 import SimpleT5

app = Flask(__name__)
# Create model
model = SimpleT5() 
# Load model parameters
model.load_model("t5", "../outputs/simplet5-epoch-2-train-loss-0.8114-val-loss-1.4894", use_gpu=True)

@app.route('/summarize', methods=['POST'])
def add():
    data = request.get_json()
    # Get summary
    summary = model.predict("summarize: " + data)

    return jsonify({ 'summary': summary })