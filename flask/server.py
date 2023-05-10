from flask import Flask,render_template,request
from model import sentence_generation
app = Flask(__name__)
 
 
@app.route('/')
@app.route('/content')
def index():
    return render_template('index.html')
 
@app.route('/thumbnail')
def thumbnail():
    return render_template('thumbnail.html')

@app.route('/title')
def title():
    return render_template('title.html')

@app.route('/predict',methods=['POST'])
def predict():
    dic={'리뷰':'review','먹방':'mukbang','운동':'work','패션':'fashion','일상':'vlog'}
    content=request.form['title_content']
    text=request.form['text_input']
    len=request.form['textlen']
    if content and text and len:
        new_title=sentence_generation(dic[content],text,int(len)-1)
        return render_template('title.html',content=content,  word=text, len=len,newtitle='"'+new_title+'"')
    else:
        return render_template('title.html')


if __name__ == '__main__':
    app.run()

