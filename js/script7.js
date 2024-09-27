window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento7();
    } else if (e.key === "-") { 
        decremento7();
    }
});

let contador7 = 0;

const valor7 = document.getElementById("valor7"); 
const total7 = document.getElementById("total7");

function incremento7() {
    contador7 += 1; 
    contadorp=120000*contador7;
    
    valor7.innerHTML = contador7;
    total7.innerHTML = contadorp;
} 

function decremento7() {
    if (contador7 > 0) {
        contador7 -= 1; 
        contadorp -= 120000 
    }
    valor7.innerHTML = contador7;
    total7.innerHTML = contadorp;
}

