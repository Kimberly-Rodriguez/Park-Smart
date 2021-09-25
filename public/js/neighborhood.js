// const newFormHandler = async (event) => {
//   event.preventDefault();

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

var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const ten = document.querySelector('.ten');
const eleven = document.querySelector('.eleven');
const twelve = document.querySelector('.twelve');
const thirteen = document.querySelector('.thirteen');
const fourteen = document.querySelector('.fourteen');
const fifteen = document.querySelector('.fifteen');
const sixteen = document.querySelector('.sixteen');
const seventeen = document.querySelector('.seventeen');
const eighteen = document.querySelector('.eighteen');
const nineteen = document.querySelector('.nineteen');
const twenty = document.querySelector('.twenty');
const twentyOne = document.querySelector('.twenty-one');
const twentyTwo = document.querySelector('.twenty-two');
const twentyThree = document.querySelector('.twenty-three');
const twentyFour = document.querySelector('.twenty-four');

spotArray = [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyOne, twentyTwo, twentyThree, twentyFour]

function modalDisplay() {

  for (let i = 0; i < spotArray.length; i++) {

    const spot = spotArray[i];
    const taken = spot.getAttribute('data-taken')
    
    if (taken === 'taken') {
      spot
    }
  }
}


// custom-handle (slider for time change ui.value)
$( function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
    }
  });
} );

spotOne.addEventListener('click', modalDisplay);

// modal range will show the value in the input box
function updateTextInput(val) {
  document.getElementById('textInput').value=val; 
}