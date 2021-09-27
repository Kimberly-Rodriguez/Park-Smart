// const newFormHandler = async (event) => {
//   event.preventDefault();

const { ParkingSpot } = require("../../models");

//   const name = document.querySelector('#project-name').value.trim();
//   const needed_funding = document.querySelector('#project-funding').value.trim();
//   const description = document.querySelector('#project-desc').value.trim();

//   if (name && needed_funding && description) {
//     const response = await fetch(`/api/projects`, {
//       method: 'POST',
//       body: JSON.stringify({ name, needed_funding, description }),
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to create project');
//     }
//   }
// };

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };

// const spots = document.querySelector('.spot');

// function colorChange() {

//   if (ParkingSpot.spot_taken === true) {
    
//     spots.setAttribute('class', 'red')
//   }
// }

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}

// colorChange();
updateTextInput();

// module.exports = colorChange();