from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

models = {
    'news': "sshleifer/distilbart-cnn-12-6",
    'scientific paper': "google/bigbird-pegasus-large-arxiv",
    'book': "pszemraj/led-large-book-summary"
}

@app.route('/summarize', methods=['POST'])
def add():
    data = request.get_json()
    content = data['content']
    wordLimit = data['wordLimit']
    summaryMode = data['summaryMode']
    summariser = pipeline("summarization", model=models[summaryMode])
    summary = summariser(content, max_length=wordLimit, min_length=30, do_sample=False)[0]['summary_text']

    return jsonify({ 'summary': summary })


