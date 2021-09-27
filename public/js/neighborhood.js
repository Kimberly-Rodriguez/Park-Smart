const parkingLot = document.querySelector('.parkingLot');

let spotId;

function renderModal(event) {
  
  event.preventDefault();
  console.log(event.target);

  if (event.target.matches('a')) {

    const dataAttribute = event.target.getAttribute('data-taken')

    if (dataAttribute === 'true') {

      document.querySelector('.taken').style.display = 'block'
      document.querySelector('.notTaken').style.display = 'none'
      
      const timeAttribute = event.target.getAttribute('data-time')
      const timeEl = document.querySelector('.timeDiv');
      timeEl.innerHTML = '';
      timeEl.textContent = timeAttribute;

      

    } else {

      document.querySelector('.notTaken').style.display = 'block'
      document.querySelector('.taken').style.display = 'none'

      const spotTakenPutButton = document.querySelector('.spotTakenPutRequest')
      spotTakenPutButton.addEventListener('click', 'putRequest');

      spotId = event.target.getAttribute('data-spot')

      function putRequest() {
        
        const spotTaken = document.querySelector('.spot_taken').checked;
        const timeAvailable = document.querySelector('.time_available').value;

        const response = await fetch(`/api/neighborhood/${spotId}`, {
          method: 'PUT',
          body: JSON.stringify({
            spot_taken: spotTaken,
            time_available: timeAvailable,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        if (response.ok) {
          window.location.reload();
        } else {
          alert('Failed to add dish');
        }
      }
    }
  }
}

parkingLot.addEventListener('click', renderModal);

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

updateTextInput();