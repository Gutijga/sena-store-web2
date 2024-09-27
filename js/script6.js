window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento6();
    } else if (e.key === "-") { 
        decremento6();
    }
});

let contador6 = 0;

const valor6 = document.getElementById("valor6"); 
const total6 = document.getElementById("total6");

function incremento6() {
    contador6 += 1; 
    contadorp=80000*contador6;
    
    valor6.innerHTML = contador6;
    total6.innerHTML = contadorp;
} 

function decremento6() {
    if (contador6 > 0) {
        contador6 -= 1; 
        contadorp -= 80000 
    }
    valor6.innerHTML = contador6;
    total6.innerHTML = contadorp;
}

