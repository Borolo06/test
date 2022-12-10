let body = document.querySelector('main');
body.style.background = "linear-gradient(to right, red, black)";

let si = document.querySelector('.boton-si');
let no = document.querySelector('.boton-no');


si.addEventListener("click", () => {
    alert("Falacias");
});

no.addEventListener("click", () => {
    alert("Yo sabia :(");
});