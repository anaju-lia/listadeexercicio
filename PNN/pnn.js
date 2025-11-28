function verificarN(N) {

var N = document.querySelector ("#N").value;
var resultado = document.querySelector("#resultado");

    if (N === "") {
        alert("(╥﹏╥) < Nenhum número inserido!");
        return;
    }
      N = Number(N);

  if (N > 0) {
    resultado.innerText = "(ദ്ദി˙ᗜ˙) Positivo!";

  } else if (N < 0) {
    resultado.innerText = "( ︶︿︶) Negativo!";

  } else {
    resultado.innerText = "(．＿．) Nulo!";
  }
}