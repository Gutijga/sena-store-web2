window.addEventListener("keydown", (e) => {
    if (e.key === "+") { 
        incremento4();
    } else if (e.key === "-") { 
        decremento4();
    }
});

let contador4 = 0;

const valor4 = document.getElementById("valor4"); 
const total4 = document.getElementById("total4");

function incremento4() {
    contador4 += 1; 
    contadorp=55000*contador4;
    
    valor4.innerHTML = contador4;
    total4.innerHTML = contadorp;
} 

function decremento4() {
    if (contador4 > 0) {
        contador4 -= 1; 
        contadorp -= 55000 
    }
    valor4.innerHTML = contador4;
    total4.innerHTML = contadorp;
}

