import pandas as pd
import numpy as np
import tensorflow as tf
import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'

def sentence_generation(category,current_word, n):
    data = pd.read_csv('data/'+category+'.csv')
    title=list(data.title.values)

    tokenizer = tf.keras.preprocessing.text.Tokenizer()
    tokenizer.fit_on_texts(title)

    sequences = list()
    for sentence in title:
        encoded = tokenizer.texts_to_sequences([sentence])[0] 
        for i in range(1, len(encoded)):
            sequence = encoded[:i+1]
            sequences.append(sequence)
    
    max_len = max(len(l) for l in sequences)

    model = tf.keras.models.load_model('model/'+category+'.h5')

    init_word = current_word
    sentence = ''

    for _ in range(n):
        encoded = tokenizer.texts_to_sequences([current_word])[0]
        encoded = tf.keras.preprocessing.sequence.pad_sequences([encoded], maxlen=max_len-1, padding='pre')

        result = model.predict(encoded, verbose=0)
        result = np.argmax(result, axis=1)

        for word, index in tokenizer.word_index.items(): 
            if index == result:
                break

        current_word = current_word + ' '  + word

        sentence = sentence + ' ' + word

    sentence = init_word + sentence
    return sentence