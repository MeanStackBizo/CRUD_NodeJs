from flask import Flask, request, jsonify

from werkzeug.utils import secure_filename

import os

# from PIL import Image
# from pytesseract import image_to_string
# image=Image.open('germanytext.png')
# text=image_to_string(image,lang='deu')
# print(text)
# file=open('output.txt','w')
# text=repr(text)
# file.write(text)
# file.close


from flask_cors import CORS

app = Flask(__name__)

CORS(app, origins='http://localhost:4200')

if not os.path.exists('uploads'):
    os.makedirs('uploads')

@app.route('/api/upload', methods=['POST'])
def upload_image():
   
    if 'image' not in request.files:
        return jsonify({'error': 'No image provided'}), 400

    file = request.files['image']
    filename = secure_filename(file.filename)
    if filename == '':
        return jsonify({'error': 'No selected file'}), 400

    temp_image_path = os.path.join('uploads', filename)
    file.save(temp_image_path)
    print(f'File saved as: {temp_image_path}')
    extracted_data = extract_text_from_image(temp_image_path)

    return jsonify(extracted_data)

def extract_text_from_image(image_path):
    import pytesseract
    pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR'
    from PIL import Image
    try:
        img = Image.open(image_path)
        text = pytesseract.image_to_string(img)
        print(f'Extracted text: {text}')
        return text
    except Exception as e:
        print(f"An error occurred: {e}")
        return None

if __name__ == '__main__':
    app.run(debug=True)
