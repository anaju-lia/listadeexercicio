function verificarN(N){
    var N = document.querySelector("#N").value;
  var resultado = document.querySelector("#resultado"); 

  if (N === "") {
    alert("Insira um número.");
    return;
  }

  N = Number(N);
  var primo = true;

  if (N < 2) {
    primo = false;
  } else {
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i === 0) {
        primo = false;
        break;
      }
    }
  }

  
  if (primo) {
    resultado.innerText = " ╰┈➤S";
  } else {
    resultado.innerText = " ╰┈➤N";
  }
}