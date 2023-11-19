//redirected to home page and set user name to local storage

function login(){
   //1.get username from home
    let username=document.getElementById('uname').value;
    console.log(username);
    localStorage.setItem("USERNAME" ,username)
    //redirect to home page
    window.location='./home.html';
}
