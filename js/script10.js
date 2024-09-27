window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento10();
    } else if (e.key === "-") { 
        decremento10();
    }
});

let contador10 = 0;

const valor10 = document.getElementById("valor10"); 
const total10 = document.getElementById("total10");

function incremento10() {
    contador10 += 1; 
    contadorp=60000*contador10;
    
    valor10.innerHTML = contador10;
    total10.innerHTML = contadorp;
} 

function decremento10() {
    if (contador10 > 0) {
        contador10 -= 1; 
        contadorp -= 60000 
    }
    valor10.innerHTML = contador10;
    total10.innerHTML = contadorp;
}

