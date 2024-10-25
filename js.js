

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
document.querySelector("#login-container form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "homepage.html"; // Redirect to homepage.html
});
document.querySelector(".signup-container form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    window.location.href = "homepage.html"; // Redirect to homepage.html
});


