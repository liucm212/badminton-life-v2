// 按下close button就關掉event section
const eventInfo = document.querySelector('#eventInfo');
const eventCloseIcon = document.querySelector('#eventCloseIcon');

document.addEventListener('DOMContentLoaded', function(){
  // close the event element when the close icon is clicked.
  // if eventCloseIcon is not null, addEventListener to act.
  if(eventCloseIcon){
    eventCloseIcon.addEventListener('click', function(){
      eventInfo.classList.add('d-none');
    })
  }
})