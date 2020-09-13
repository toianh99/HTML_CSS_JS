function Login(){
    var x=document.getElementById('username').value;
    var y =document.getElementById('password').value;
    if(x==='admin'&&y==='admin'){
       
        alert("Đăng nhập thành công");
    }
    else{
        document.getElementById('form_login').action='login.html';
    }
    
}
// function getUserName(){
//     x=document.getElementById('username').value;
// }
// function getPassword(){
//     y =document.getElementById('password').value;
// }