var authorizationFrame = document.querySelector(".correction");
var authorizationBtn = document.querySelector(".authorization-btn");
document.querySelector(".authorization-form").addEventListener("keydown", function (event) {
    if (event.keyCode === 13) {
        authorizationConfirmed();
    }
})
authorizationBtn.addEventListener("click", function(){
    authorizationConfirmed();
})

function authorizationConfirmed(){
    console.log(document.querySelector("#pswrd").value);
    if(document.querySelector("#pswrd").value == "hello"){
        document.location = "calc.html";
    }else{
        alert("Invalid password");
    }
}
