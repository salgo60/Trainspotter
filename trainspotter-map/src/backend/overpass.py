import requests

OVERPASS_URL = "http://overpass-api.de/api/interpreter"

def fetch_train_data(query):
    response = requests.get(OVERPASS_URL, params={'data': query})
    if response.status_code == 200:
        return response.json()
    else:
        response.raise_for_status()

def get_train_lines():
    query = """
    [out:json];
    railway=rail;
    out body;
    """
    return fetch_train_data(query)

def get_train_stations():
    query = """
    [out:json];
    node[railway=station];
    out body;
    """
    return fetch_train_data(query)

def get_train_types():
    query = """
    [out:json];
    node[railway=train];
    out body;
    """
    return fetch_train_data(query)