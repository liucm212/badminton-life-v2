// 控制pagination顯示

const pagination = document.querySelector('.pagination')

// get all the pagination-item
const paginationItem = document.querySelectorAll('.pagination-item');

// get prev controller
const prevBtn = document.querySelector('#controllerPrev')

// get next controller
const nextBtn = document.querySelector('#controllerNext')



// if can get the pagination element, then start the following action.
if(pagination){

  // pagination-item click
  document.addEventListener('DOMContentLoaded', function(){
    // for each pagination-iem add listener : clink 
    paginationItem.forEach(function(item){
      item.addEventListener('click', function(e){
        // prevent default
        e.preventDefault()

        // get the father ".pagination" 
        const pagination = item.parentNode.parentNode
        // then get all the ".pagination-item" in that pagination.
        const items = pagination.querySelectorAll('.pagination-item')

        // remove ".active" class in all ".pagination-item"
        items.forEach(function(item){
          item.classList.remove('active')
        })
        // add .active class name into the .pagination-item that is clicked.
        item.classList.add('active')
      })
    })
  })


  // prev btn click
  document.addEventListener('DOMContentLoaded', function(){
    prevBtn.addEventListener('click', function(e){
      // preventDefault
      e.preventDefault()


      const activeItem = pagination.querySelector('.active')
      // the previous item of activeItem
      const prevItem = activeItem.parentElement.previousElementSibling.querySelector('a')
      // if prevItem is not  1, add .active class onto prevItem and remove .active class in activeItem
      if(prevItem.className == "pagination-item"){
        // remove the active class name in activeItem
        activeItem.classList.remove('active')
        // add .active class name into prevItem
        prevItem.classList.add('active')
      }else{
        
      }
    })
  })


  // next btn click
  document.addEventListener('DOMContentLoaded', function(){
    nextBtn.addEventListener('click', function(e){
      // preventDefault
      e.preventDefault()


      const activeItem = pagination.querySelector('.active')
      // the next item of activeItem
      const nextItem = activeItem.parentElement.nextElementSibling.querySelector('a')
      // if nextItem is not  1, add .active class onto nextItem and remove .active class in activeItem
      if(nextItem.className == "pagination-item"){
        // remove the active class name in activeItem
        activeItem.classList.remove('active')
        // add .active class name into nextItem
        nextItem.classList.add('active')
      }else{
        
      }
    })
  })
}






