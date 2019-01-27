import os
from flask import Flask, jsonify, request, flash, redirect, url_for
from flask_restful import Resource, Api
from werkzeug.utils import secure_filename

ALLOWED_EXTENSIONS = set(['wav'])
app = Flask(__name__)
#api = Api(app)

def allowed_file(filename):
    return '.' in filename and \
            filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/', methods=['GET','POST'])
def count():
    if request.method == "POST":
        if 'file' not in request.files:
            flash('No file part')
            return redirect(request.url)
        file = request.files['file']
        if file.filename == '':
            flash('No selected file')
            return redirect(request.url)
            
    return file.filename

if __name__ == '__main__':
    app.run()