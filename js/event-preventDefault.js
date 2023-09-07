//預防close button被關掉時啟動a的預設機制，回到最上方。
let closeBtns = document.querySelectorAll('.event-img') ; 

document.addEventListener("DOMContentLoaded", function(){
  closeBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
      // 預防他直接跳轉
      e.preventDefault()
    })
  })
})