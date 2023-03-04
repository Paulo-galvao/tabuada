let x = document.getElementById("numb");
let tabuada = "";
let tabResult = document.querySelector(".tab_result");
let btn = document.getElementById("btn");
let ref = document.getElementById("refresh");

btn.addEventListener("click", calcular);
ref.addEventListener("click", function() {
    tabResult.innerHTML = "";
    btn.setAttribute("type", "submit");
} )

function calcular(event) {
    event.preventDefault();
    
    if(x.value == "") {
        alert("Preencha o campo em branco!");
    } else {
        for(i = 1; i <= 10; i++) {
            tabuada += (`${x.value} x ${i} = ${x.value * i} <br/>`);
        }
    
        tabResult.innerHTML = tabuada;
        tabResult.style.display = "flex";
        btn.style.display = "none";
        ref.style.display = "inline";
    }
}
