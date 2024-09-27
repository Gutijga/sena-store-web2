window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento2();
    } else if (e.key === "-") { 
        decremento2();
    }
});

let contador2 = 0;

const valor2 = document.getElementById("valor2"); 
const total2 = document.getElementById("total2");

function incremento2() {
    contador2 += 1; 
    contadorp=80000*contador2;
    
    valor2.innerHTML = contador2;
    total2.innerHTML = contadorp;
} 

function decremento2() {
    if (contador2 > 0) {
        contador2 -= 1; 
        contadorp -= 50000 
    }
    valor2.innerHTML = contador2;
    total2.innerHTML = contadorp;
}

