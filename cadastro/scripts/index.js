
var nome = document.getElementById("nome");
var sobrenome = document.getElementById("sobrenome");
var email = document.getElementById("mail");
var senha1 = document.getElementById("pass");
var senha2 = document.getElementById("pass2");
var phnome = document.querySelector("#phnome");
var phsobrenome = document.querySelector("#phsobrenome");
var phemail = document.querySelector("#phemail");
var phsenha1 = document.querySelector("#phsenha1");
var phsenha2 = document.querySelector("#phsenha2");
var olho = document.querySelector(".fas");

var back_input = document.querySelectorAll(".back-input");
var placeholder = document.querySelectorAll(".placeholder");
var element_input = document.querySelectorAll("input");

var transform1 = "translate(-6px, -20px) scale(.8)";
var transform2 = "translate(-10px, -20px) scale(.8)";
var transform3 = "translate(-12px, -20px) scale(.8)";



nome.addEventListener("keyup", function (){
    inputPlaceValue(nome, phnome, transform1);
});
sobrenome.addEventListener("keyup", function (){
    inputPlaceValue(sobrenome, phsobrenome, transform2);
});
email.addEventListener("keyup", function (){
    inputPlaceValue(email, phemail, transform1);
});
senha1.addEventListener("keyup", function (){
    inputPlaceValue(senha1, phsenha1, transform1);
});
senha2.addEventListener("keyup", function (){
    inputPlaceValue(senha2, phsenha2, transform3);
});



nome.addEventListener("focus", function (){
    inputPlaceFocus(nome, phnome, transform1);
});
sobrenome.addEventListener("focus", function (){
    inputPlaceFocus(sobrenome, phsobrenome, transform2);
});
email.addEventListener("focus", function (){
    inputPlaceFocus(email, phemail, transform1);
});
senha1.addEventListener("focus", function (){
    inputPlaceFocus(senha1, phsenha1, transform1);
});
senha2.addEventListener("focus", function (){
    inputPlaceFocus(senha2, phsenha2, transform3);
});



nome.addEventListener("blur", function (){
    inputPlaceBlur(nome, phnome);
});
sobrenome.addEventListener("blur", function (){
    inputPlaceBlur(sobrenome, phsobrenome);
});
email.addEventListener("blur", function (){
    inputPlaceBlur(email, phemail);
});
senha1.addEventListener("blur", function (){
    inputPlaceBlur(senha1, phsenha1);
});
senha2.addEventListener("blur", function (){
    inputPlaceBlur(senha2, phsenha2);
});



olho.addEventListener("click", function (){
    passVisibleHidden();
});



function inputPlaceValue(input, ph, transform){
    if (input.value.length > 0){
        ph.style.transform = transform;
        ph.style.color = "deepskyblue";
        input.style.border = "1px solid deepskyblue";
    }
    else{
        ph.style.transform = "translate(0, 0) scale(1)";
        ph.style.color = "darkslategray";
        input.style.border = "1px solid grey";
        if (localStorage.dark == "true"){
            ph.style.color = "#eee";
        }
    }
};


function inputPlaceFocus(input, ph, transform){
    if (input.value.length == 0){
        ph.style.transform = transform;
        ph.style.color = "deepskyblue";
        input.style.border = "1px solid deepskyblue";
    }
};


function inputPlaceBlur(input, ph){
    if (input.value.length == 0){
        ph.style.transform = "translate(0, 0) scale(1)";
        ph.style.color = "darkslategray";
        input.style.border = "1px solid grey";
        if (localStorage.dark == "true"){
            ph.style.color = "#eee";
        }
    }
};


function passVisibleHidden(){
    olho.classList.toggle("fa-eye-slash");
    if (senha1.type === "password" && senha2.type === "password"){
        senha1.type = "text";
        senha2.type = "text";
    }
    else{
        senha1.type = "password";
        senha2.type = "password";
    }
};








/* Toggle Background between white and dark mode */

var swaip = document.querySelector(".swaip").addEventListener("click", function (){
    alterBack();
});
var back_ball = document.querySelector(".back-ball");
var ball = document.querySelector(".ball");
var body = document.querySelector("body");
var h1 = document.querySelector("h1");
var p = document.querySelector("p");

if (localStorage.dark == "true"){
    localStorage.dark = false;
    alterBack();
}


function alterBack(){
    if (localStorage.dark == "true"){
        localStorage.dark = false;
    }
    else{
        localStorage.dark = true;
    }

    if (localStorage.dark == "true"){
        for (var i=0; i<placeholder.length; i++){
            placeholder[i].style.color = "#eee";
        }
    }
    else{
        for (var i=0; i<placeholder.length; i++){
            placeholder[i].style.color = "darkslategray";
        }
    }

    ball.classList.toggle("addball");
    back_ball.classList.toggle("addback-ball");
    body.classList.toggle("addbody");
    h1.classList.toggle("addh1p");
    p.classList.toggle("addh1p");

    for (var i=0; i<element_input.length - 1; i++){
        back_input[i].classList.toggle("addback-input");
        element_input[i].classList.toggle("addinputcolor");
        if (element_input[i].value.length > 0){
            placeholder[i].style.color = "deepskyblue";
        }
    }
};