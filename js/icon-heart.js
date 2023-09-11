// get all the heart icons
const heartIcons = document.querySelectorAll('.icon-heart');
// console.log(heartIcons.length)

// dom content loaded
document.addEventListener('DOMContentLoaded',function(){
  heartIcons.forEach(function(icon){
    // listener : click
    icon.addEventListener('click',function(e){
      // toggle active
      console.log('click')
      icon.classList.toggle('icon-heart-normal');
      icon.classList.toggle('icon-heart-active');
      console.log(icon)
    })
  })
})



