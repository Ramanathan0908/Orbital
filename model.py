"""Dependencies: transformers, sentencepiece"""
from transformers import pipeline

# Load pipeline
summariser = pipeline("summarization")

# Test input
sample_text = """
Franz Kafka[a] (3 July 1883 – 3 June 1924) was a German-speaking Bohemian novelist and short-story writer, widely regarded as one of the major figures of 20th-century literature. His work fuses elements of realism and the fantastic.[4] It typically features isolated protagonists facing bizarre or surrealistic predicaments and incomprehensible socio-bureaucratic powers. It has been interpreted as exploring themes of alienation, existential anxiety, guilt, and absurdity.[5] His best known works include the short story "The Metamorphosis" and novels The Trial and The Castle. The term Kafkaesque has entered English to describe situations like those found in his writing.[6]

Kafka was born into a middle-class German-speaking Czech Jewish family in Prague, the capital of the Kingdom of Bohemia, then part of the Austro-Hungarian Empire, today the capital of the Czech Republic.[7] He trained as a lawyer and after completing his legal education was employed full-time by an insurance company, forcing him to relegate writing to his spare time. Over the course of his life, Kafka wrote hundreds of letters to family and close friends, including his father, with whom he had a strained and formal relationship. He became engaged to several women but never married. He died in 1924 at the age of 40 from tuberculosis.

Few of Kafka's works were published during his lifetime: the story collections Contemplation and A Country Doctor, and individual stories (such as "The Metamorphosis") were published in literary magazines but received little public attention. In his will, Kafka instructed his executor and friend Max Brod to destroy his unfinished works, including his novels The Trial, The Castle, and Amerika, but Brod ignored these instructions. His work has influenced a vast range of writers, critics, artists, and philosophers during the 20th and 21st centuries.
"""

# summarise
summary = summariser(sample_text, max_length=100, min_length=50, do_sample=False)

# print result
print(summary)