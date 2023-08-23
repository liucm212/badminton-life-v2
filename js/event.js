const eventInfo = document.querySelector('#eventInfo');
const eventCloseIcon = document.querySelector('#eventCloseIcon');

document.addEventListener('DOMContentLoaded', function(){
  // close the event element when the close icon is clicked.
  eventCloseIcon.addEventListener('click', function(){
    eventInfo.classList.add('d-none');
  })
})