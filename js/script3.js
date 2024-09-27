window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento3();
    } else if (e.key === "-") { 
        decremento3();
    }
});

let contador3 = 0;

const valor3 = document.getElementById("valor3"); 
const total3 = document.getElementById("total3");

function incremento3() {
    contador3 += 1; 
    contadorp=120000*contador3;
    
    valor3.innerHTML = contador3;
    total3.innerHTML = contadorp;
} 

function decremento3() {
    if (contador3 > 0) {
        contador3 -= 1; 
        contadorp -= 120000 
    }
    valor3.innerHTML = contador3;
    total3.innerHTML = contadorp;
}

