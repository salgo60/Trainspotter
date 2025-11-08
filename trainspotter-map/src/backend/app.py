from flask import Flask, jsonify, request
from flask_cors import CORS
from storage import load_travels, save_travels
from api.routes import api_bp

app = Flask(__name__)
CORS(app)

# Load existing travel data
travels = load_travels()

# Register API routes
app.register_blueprint(api_bp)

@app.route('/')
def index():
    return jsonify({"message": "Welcome to the Trainspotter API!"})

@app.route('/travels', methods=['GET'])
def get_travels():
    return jsonify(travels)

@app.route('/travels', methods=['POST'])
def add_travel():
    new_travel = request.json
    travels.append(new_travel)
    save_travels(travels)
    return jsonify(new_travel), 201

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)