const spots = document.querySelector('.spot');

const renderNeighborhood = async () => {

    const response = await fetch('/api/neighborhood', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

        document.location.replace('/neighborhood');

        if (ParkingSpot.spot_taken === true) {
    
            spots.setAttribute('class', 'red')
        }

    } else {
        alert(response.statusText);
    }
};

document.querySelector('.neighborhoodRoute').addEventListener('click', renderNeighborhood);