function fetchTrainData(query) {
    const endpoint = 'https://overpass-api.de/api/interpreter';
    const params = {
        data: query
    };

    return fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(params)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

function getTrainLines() {
    const query = `
        [out:json];
        railway=rail;
        out body;
    `;
    return fetchTrainData(query);
}

function getTrainStations() {
    const query = `
        [out:json];
        node["railway"="station"];
        out body;
    `;
    return fetchTrainData(query);
}

export { getTrainLines, getTrainStations };