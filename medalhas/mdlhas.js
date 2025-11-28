function verificarM() {
  var t1 = Number(document.querySelector("#t1").value);
  var t2 = Number(document.querySelector("#t2").value);
  var t3 = Number(document.querySelector("#t3").value);
  var rO = document.querySelector("#rO");
  var rP = document.querySelector("#rP");
  var rB = document.querySelector("#rB");


  

  if (t1 === 0 && t2 === 0 && t3 === 0) {
    alert("Insira os tempos");
    return;
  }

  var tempos = [
    { tempo: t1, nadador: 1 },
    { tempo: t2, nadador: 2 },
    { tempo: t3, nadador: 3 }
  ];

   tempos.sort(function(a, b) {
    return a.tempo - b.tempo;
   })

  
  rO.innerText = "Ouro: Nadador " + tempos[0].nadador;
  rP.innerText = "Prata: Nadador " + tempos[1].nadador;
  rB.innerText = "Bronze: Nadador " + tempos[2].nadador;



}
