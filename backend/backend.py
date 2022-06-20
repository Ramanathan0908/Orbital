import time
from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)
summariser = pipeline("summarization")

@app.route('/summarize', methods=['POST'])
def add():
    data = request.get_json()
    summary = summariser(data, max_length=100, min_length=50, do_sample=False)[0]['summary_text']

    return jsonify({ 'summary': summary })