window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento9();
    } else if (e.key === "-") { 
        decremento9();
    }
});

let contador9 = 0;

const valor9 = document.getElementById("valor9"); 
const total9 = document.getElementById("total9");

function incremento9() {
    contador9 += 1; 
    contadorp=15000*contador9;
    
    valor9.innerHTML = contador9;
    total9.innerHTML = contadorp;
} 

function decremento9() {
    if (contador9 > 0) {
        contador9 -= 1; 
        contadorp -= 15000 
    }
    valor9.innerHTML = contador9;
    total9.innerHTML = contadorp;
}

