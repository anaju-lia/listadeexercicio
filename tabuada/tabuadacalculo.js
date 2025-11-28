function Calculo() { 
const valorTabuada = document.querySelector("#tabuada").value;
let multi = "";
document.querySelector('.valor').innerHTML = ""

for(let i = 1; i<11; i = i + 1){ 
    multi = i * valorTabuada;
    document.querySelector('.valor').innerHTML += `${valorTabuada} * ${i} = ${multi} <br>`;
    
}

}



