const dropdownItem = document.querySelector('.dropdown-item');
const dropdownItems = document.querySelectorAll('.dropdown-item');
const dropdownContents = document.querySelectorAll('.dropdown-content');

// toggle dropdown-content when dropdown-item is clicked.
document.addEventListener('DOMContentLoaded', function(){
  dropdownItems.forEach(function(item){
    item.addEventListener('click', function(e){
      e.stopPropagation();
      const itemContent = item.nextElementSibling ; 
      itemContent.classList.toggle('d-block');
    })
  })
  document.querySelector('body').addEventListener('click', function(e){
    e.stopPropagation();
    dropdownContents.forEach(function(content){
      content.classList.remove('d-block');
    })
  });
})