// 預防forum在送出表單時跳轉
// 取得所有的.forum-forms
let forumForms = document.querySelectorAll('.forum-form') ; 

document.addEventListener("DOMContentLoaded", function(){
  forumForms.forEach(function(form){
    form.addEventListener('submit', function(e){
      // 預防他直接跳轉
      e.preventDefault()
      // console.log("成功預防跳轉")
      // 取得forum內的text input
      let textInput = this.querySelector(".forum-input")
      textInput.value = '' ;
      console.log('清空input value')
    })
  })
})