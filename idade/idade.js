 function calcularI(){
  var M = Number(document.querySelector("#M").value);
  var F1 = Number(document.querySelector("#F1").value);
  var F2 = Number(document.querySelector("#F2").value);
  var saida = document.getElementById("saida");

  if (!M || !F1 || !F2) {
    alert("Por favor, insira todas as idades!");
    return;
  }

  var filhoMaisVelho = M - (F1 + F2);

  saida.innerText = "Idade do filho mais velho: " + filhoMaisVelho + " anos";
}





