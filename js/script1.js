window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento();
    } else if (e.key === "-") { 
        decremento();
    }
});

let contador = 0;

const valor = document.getElementById("valor"); 
const total1 = document.getElementById("total1");

function incremento() {
    contador += 1; 
    contadorp=50000*contador;
    
    valor.innerHTML = contador;
    total1.innerHTML = contadorp;
} 

function decremento() {
    if (contador > 0) {
        contador -= 1; 
        contadorp -= 50000 
    }
    valor.innerHTML = contador;
    total1.innerHTML = contadorp;
}

