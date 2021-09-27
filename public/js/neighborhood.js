const parkingLot = document.querySelector('.parkingLot');

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
    }
  }
}

parkingLot.addEventListener('click', renderModal);

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

updateTextInput();