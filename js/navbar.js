document.addEventListener('DOMContentLoaded', function(){
  // get elements
  const openIcon = document.querySelector('#openIcon') ; 
  const closeIcon = document.querySelector('#closeIcon');
  const mobileNavbar = document.querySelector('#mobileNavbar')

  // open the mobile nav bar white
  openIcon.addEventListener('click', function(){
    // 新增d-none讓menu消失
    openIcon.classList.add('d-none');
    // 讓colseIcon出現
    closeIcon.classList.remove('d-none');

    // 顯示mobile navbar
    mobileNavbar.classList.remove('d-none');

  })

  closeIcon.addEventListener('click', function(){
    // 消除d-none class name
    openIcon.classList.remove('d-none');
    // 讓colseIcon消失
    closeIcon.classList.add('d-none');

    // 消除mobile navbar
    mobileNavbar.classList.add('d-none');
  })
})