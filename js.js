

document.getElementById('login-btn').addEventListener('click',function(){
     document.querySelector('.login-pop').style.display = 'block';
});
document.querySelector('.exit-login').addEventListener('click',function(){
     var content = document.querySelector('.login-pop').style.display = 'none';
     let loginCont = document.getElementById('login-container')

     if(content == 'none'){
          content = 'block';
     }else{
          loginCont.classList.add('toBottom-animation')
          content = 'none';
     };
});
document.getElementById('signup-btn').addEventListener('click',function(){
     document.querySelector('.signup-pop').style.display = 'block';
});
document.querySelector('.exit-signup').addEventListener('click',function(){
     var content = document.querySelector('.signup-pop').style.display = 'none';

     if(content == 'none'){
          content = 'block';
     }else{
          content = 'none';
     };
});
document.getElementById('submit-btn').addEventListener('click', function(){
     window.location.href = "homepage.html"
})

