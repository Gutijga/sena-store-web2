window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento5();
    } else if (e.key === "-") { 
        decremento5();
    }
});

let contador5 = 0;

const valor5 = document.getElementById("valor5"); 
const total5 = document.getElementById("total5");

function incremento5() {
    contador5 += 1; 
    contadorp=50000*contador5;
    
    valor5.innerHTML = contador5;
    total5.innerHTML = contadorp;
} 

function decremento5() {
    if (contador5 > 0) {
        contador5 -= 1; 
        contadorp -= 50000 
    }
    valor5.innerHTML = contador5;
    total5.innerHTML = contadorp;
}

