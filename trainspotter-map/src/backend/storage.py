from pathlib import Path
import json

class Storage:
    def __init__(self, data_file='src/data/travels.json'):
        self.data_file = Path(data_file)
        self.data = self.load_data()

    def load_data(self):
        if self.data_file.exists():
            with open(self.data_file, 'r') as file:
                return json.load(file)
        return []

    def save_data(self):
        with open(self.data_file, 'w') as file:
            json.dump(self.data, file)

    def add_travel(self, travel_entry):
        self.data.append(travel_entry)
        self.save_data()

    def get_travels(self):
        return self.data

    def clear_travels(self):
        self.data = []
        self.save_data()