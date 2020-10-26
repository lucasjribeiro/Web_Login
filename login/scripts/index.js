var input1 = document.getElementById("mail");
var input2 = document.getElementById("pass");
var ph1 = document.querySelector("#ph1");
var ph2 = document.querySelector("#ph2");
var olho = document.querySelector(".fas");

var back_input = document.querySelectorAll(".back-input");
var placeholder = document.querySelectorAll(".placeholder");
var element_input = document.querySelectorAll("input");



input1.addEventListener("keyup", function (){
    inputPlaceValue(input1, ph1);
});
input2.addEventListener("keyup", function (){
    inputPlaceValue(input2, ph2);
});



input1.addEventListener("focus", function (){
    inputPlaceFocus(input1, ph1);
});
input2.addEventListener("focus", function (){
    inputPlaceFocus(input2, ph2, olho);
});



input1.addEventListener("blur", function (){
    inputPlaceBlur(input1, ph1);
});
input2.addEventListener("blur", function (){
    inputPlaceBlur(input2, ph2, olho);
});



olho.addEventListener("click", function (){
    passVisibleHidden();
});



function inputPlaceValue(input, ph){
    if (input.value.length > 0){
        ph.style.transform = "translate(-6px, -20px) scale(.8)";
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


function inputPlaceFocus(input, ph, ...eye){ /* Rest parameters */
    if (input.value.length == 0){
        ph.style.transform = "translate(-6px, -20px) scale(.8)";
        ph.style.color = "deepskyblue";
        input.style.border = "1px solid deepskyblue";
        /* eye é um Array, e cada item do Array está recebendo a propriedade visibility = "visible" */
        eye.map(i => i.style.visibility = "visible");
    }
};


function inputPlaceBlur(input, ph, ...eye){
    if (input.value.length == 0){
        ph.style.transform = "translate(0, 0) scale(1)";
        ph.style.color = "darkslategray";
        input.style.border = "1px solid grey";
        eye.map(i => i.style.visibility = "hidden");
        if (localStorage.dark == "true"){
            ph.style.color = "#eee";
        }
    }
};


function passVisibleHidden(){
    olho.classList.toggle("fa-eye-slash");
    olho.style.visibility = "visible";
    if (input2.type === "password"){
        input2.type = "text";
    }
    else{
        input2.type = "password";
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