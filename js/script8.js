window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento8();
    } else if (e.key === "-") { 
        decremento8();
    }
});

let contador8 = 0;

const valor8 = document.getElementById("valor8"); 
const total8 = document.getElementById("total8");

function incremento8() {
    contador8 += 1; 
    contadorp=100000*contador8;
    
    valor8.innerHTML = contador8;
    total8.innerHTML = contadorp;
} 

function decremento8() {
    if (contador8 > 0) {
        contador8 -= 1; 
        contadorp -= 100000 
    }
    valor8.innerHTML = contador8;
    total8.innerHTML = contadorp;
}

