from flask import Blueprint, request, jsonify
from storage import save_travel_data, load_travel_data

api = Blueprint('api', __name__)

@api.route('/api/travel', methods=['POST'])
def mark_travel():
    data = request.json
    if not data or 'lines' not in data:
        return jsonify({'error': 'Invalid data'}), 400
    
    save_travel_data(data['lines'])
    return jsonify({'message': 'Travel data saved successfully'}), 201

@api.route('/api/travel', methods=['GET'])
def get_travel_data():
    travel_data = load_travel_data()
    return jsonify(travel_data), 200