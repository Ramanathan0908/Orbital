import time
from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Initialise a summary pipeline with the news model as the default
summariser = pipeline("summarization", model="sshleifer/distilbart-cnn-12-6")

@app.route('/summarize', methods=['POST'])
def add():
    data = request.get_json()
    summary = summariser(data, max_length=word_limit, min_length=30, do_sample=False)[0]['summary_text']

    return jsonify({ 'summary': summary })

def switch_model_to_news() -> None:
    """Switches the summariser to news mode."""

    switch_model_to("sshleifer/distilbart-cnn-12-6")

def switch_model_to_paper() -> None:
    """Switches the summariser to scientific paper mode."""

    switch_model_to("google/pegasus-pubmed")

def switch_model_to_book() -> None:
    """Switches the summariser to book mode."""

    switch_model_to("pszemraj/long-t5-tglobal-base-16384-book-summary")

def switch_model_to(modelname: str) -> None:
    """Changes the summariser to a specified model."""
    
    # Refer to the global variable named "summariser"
    # which holds our summariser pipeline
    global summariser

    # Changes it to the news model
    summariser = pipeline("summarization", model=modelname)

