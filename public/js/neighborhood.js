const parkingLot = document.querySelector('.parkingLot');

const logout = async () => {
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
};

document.querySelector('#logout').addEventListener('click', logout);

let spotId;

function renderModal(event) {
  
  event.preventDefault();

  if (event.target.matches('a')) {

    spotId = event.target.getAttribute('data-spot')

    const dataAttribute = event.target.getAttribute('data-taken')

    if (dataAttribute === 'true') {

      document.querySelector('.taken').style.display = 'block'
      document.querySelector('.notTaken').style.display = 'none'
      
      const timeAttribute = event.target.getAttribute('data-time');
      const timeEl = document.querySelector('.timeDiv');
      timeEl.innerHTML = '';
      timeEl.textContent = timeAttribute;

      const userId = event.target.getAttribute('data-user');
      const userIdClass = document.querySelector('.userIdDiv').getAttribute('data-user');
      console.log(userIdClass);
      let userView;
      console.log(userId);
      userView = document.querySelector('.userIdDiv');

      if (userIdClass === userId) {

        userView.innerHTML = '';
        userView.innerHTML = `<label for="customRange3" class="form-label">I will be leaving in &nbsp;</label><input class="timeavailable" type="text" id="textInput"
        value=""><label>&nbsp; minutes</label>
        <input type="range" name="rangeInput" class="form-range" min="0" max="300" id="customRange3" onchange="updateTextInput(this.value);">
        <button class="btn btn-danger editbtn" data-bs-toggle="modal">Edit My Time</button>
        <span>OR</span>
        <button class="btn btn-danger leavebtn" data-bs-toggle="modal">I'm Leaving</button>`
      } else {

        userView.innerHTML = '';
      }

        // putRequest 1
        const putRequest01 = async (event) => {

        
          const timeInput = document.querySelector('.timeavailable').value;
  
          const timeAvailable = moment().add(timeInput, 'minutes').format("h:mm A");
          if (event.target.matches('.editbtn')) {
            const response = await fetch(`/api/neighborhood/${spotId}`, {
              method: 'PUT',
              body: JSON.stringify({
                time_available: timeAvailable,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              //replace document with the same page
              document.location.replace('/neighborhood')
            } else {
              response.json(err);
            }


        } else if (event.target.matches('.leavebtn')) {

            const response = await fetch(`/api/neighborhood/${spotId}`, {
              method: 'PUT',
              body: JSON.stringify({
                spot_taken: false,
              }),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            if (response.ok) {
              //replace document with the same page
              document.location.replace('/neighborhood')
            } else {
              response.json(err);
            }

        }
  
        userView.addEventListener('click', putRequest01);

    }

    } else {

      document.querySelector('.notTaken').style.display = 'block'
      document.querySelector('.taken').style.display = 'none'

      const spotTakenPutButton = document.querySelector('.spotTakenPutRequest');

      spotId = event.target.getAttribute('data-spot')

      const putRequest = async () => {
        
        const spotTaken = document.querySelector('.spot_taken').checked;
        const timeInput = document.querySelector('.time_available').value;

        const timeAvailable = moment().add(timeInput, 'minutes').format("h:mm A");
        
        if (timeAvailable) {

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
            //replace document with the same page
            document.location.replace('/neighborhood')
          } else {
            response.json(err);
          }
        }

      }

      spotTakenPutButton.addEventListener('click', putRequest);
    }
  }
}

parkingLot.addEventListener('click', renderModal);

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}



updateTextInput();