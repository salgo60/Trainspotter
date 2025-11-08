# Trainspotter Map Project

## Overview
The Trainspotter Map project is designed for train enthusiasts to mark and visualize the train lines, stations, and train types they have traveled on or seen. Utilizing OpenStreetMap data through the Overpass API, this project provides an interactive map experience.

## Features
- **Interactive Map**: Users can view and interact with a map displaying train lines and stations.
- **Mark Travels**: Users can mark the train lines and stations they have traveled on.
- **Data Storage**: Travel data is saved in a JSON file for persistence.
- **Export Options**: Users can export their travel data to GeoJSON format or share it via a link.
- **User-Friendly Interface**: The frontend is designed for easy navigation and interaction.

## Project Structure
```
trainspotter-map
├── src
│   ├── backend
│   │   ├── app.py          # Main entry point for the backend application
│   │   ├── overpass.py     # Functions to interact with the Overpass API
│   │   ├── storage.py      # Handles storage and retrieval of user travel data
│   │   └── api
│   │       └── routes.py   # Defines API routes for the application
│   ├── frontend
│   │   ├── index.html      # Main HTML file for the frontend application
│   │   ├── js
│   │   │   ├── main.js     # Main JavaScript logic for the frontend
│   │   │   ├── map.js      # Responsible for rendering the map
│   │   │   └── overpass-client.js # Functions to communicate with the backend
│   │   └── css
│   │       └── styles.css   # Styles for the frontend application
│   └── data
│       └── travels.json     # Stores user's travel data in JSON format
├── notebooks
│   └── explore-overpass.ipynb # Jupyter notebook for exploring the Overpass API
├── requirements.txt          # Python dependencies for the backend application
├── Dockerfile                 # Docker image configuration
├── .devcontainer
│   └── devcontainer.json      # Development container configuration
├── .gitignore                 # Files and directories to ignore by Git
└── README.md                  # Documentation for the project
```

## Setup Instructions
1. **Clone the Repository**: 
   ```
   git clone <repository-url>
   cd trainspotter-map
   ```

2. **Install Dependencies**: 
   ```
   pip install -r requirements.txt
   ```

3. **Run the Application**: 
   ```
   python src/backend/app.py
   ```

4. **Access the Frontend**: Open your web browser and navigate to `http://localhost:5000`.

## Usage
- Use the map interface to mark your travels.
- Save your travel data, which will be stored in `src/data/travels.json`.
- Export your data as GeoJSON or share your marked travels via a link.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.