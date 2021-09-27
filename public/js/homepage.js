const spots = document.querySelector('.spot');

const renderNeighborhood = async () => {

    const response = await fetch('/api/neighborhood', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {

        document.location.replace('/neighborhood');

        // if (ParkingSpot.spot_taken === true) {
    
        //     spots.setAttribute('class', 'red')
        // }

    } else {
        alert('Failed to load');
    }
};

document.querySelector('#neighborhoodButton-4').addEventListener('click', renderNeighborhood);

// const logout = async () => {
//     const response = await fetch('/api/users/logout', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//     });
  
//     if (response.ok) {
//       document.location.replace('/');
//     } else {
//       alert(response.statusText);
//     }
//   };
  
//   document.querySelector('#logout').addEventListener('click', logout);
  