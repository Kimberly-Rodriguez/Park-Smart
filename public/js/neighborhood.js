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

    const dataAttribute = event.target.getAttribute('data-taken')

    if (dataAttribute === 'true') {

      document.querySelector('.taken').style.display = 'block'
      document.querySelector('.notTaken').style.display = 'none'
      
      const timeAttribute = event.target.getAttribute('data-time');
      const timeEl = document.querySelector('.timeDiv');
      timeEl.innerHTML = '';
      timeEl.textContent = timeAttribute;

      const userId = event.target.getAttribute('data-user');
      console.log(userId);
      if (userId === user_id) {

        const userView = document.querySelector('.userIdDiv');
        userView.innerHTML = '';
        userView.innerHTML = `<label for="customRange3" class="form-label">I will be leaving in &nbsp;</label><input type="text" id="textInput" value=""><label>&nbsp; minutes</label>
        <input type="range" name="rangeInput" class="form-range" min="0" max="300" id="customRange3" onchange="updateTextInput(this.value);">
        <button class="btn btn-danger editbtn" data-bs-toggle="modal">Edit My Time</button>
        <span>OR</span>
        <button class="btn btn-danger leavebtn" data-bs-toggle="modal">I'm Leaving</button>`
       

        // putRequest 1
        const putRequest01 = async () => {
        
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
  
              console.log(time);
              console.log(timeAvailable);
              //replace document with the same page
              document.location.replace('/neighborhood')
            } else {
              response.json(err);
            }
          }
  
        }
  
        editbtn.addEventListener('click', putRequest01);

        //put Request 2

        const putRequest02 = async () => {
        
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
  
              console.log(time);
              console.log(timeAvailable);
              //replace document with the same page
              document.location.replace('/neighborhood')
            } else {
              response.json(err);
            }
          }
  
        }
        leavebtn.addEventListener('click', putRequest02);
      }
      
      

      spotTakenPutButton.addEventListener('click', putRequest);
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

            console.log(time);
            console.log(timeAvailable);
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


parkingLot.addEventListener('click', renderModal);

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}



updateTextInput();