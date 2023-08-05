var idDialogo = 0;
var dialogos = [];
dialogos[0] = "Você ainda não conhece a história da quadra mal assombrada? Eu vou te contar!";
dialogos[1] = "Nossa escola era conhecida por ter um dos melhores times de basquete do estado";
dialogos[2] = "Nossos jogadores eram realmente incríveis! Mas até então nunca haviam chegado na final do campeonato nacional";
dialogos[3] = "Mesmo com tanto esforço, ganhar um campeonato nacional parecia um sonho distante";
dialogos[4] = "Mas os meninos nunca desanimaram e continuavam dando tudo de sí nos treinos";
dialogos[5] = "Até que um dia finalmente o sonho distante se aproximou. Eles conseguiram passar para as finais!";
dialogos[6] = "Toda escola comemorou junto! Estava tão perto agora, eles só precisavam ganhar de mais um time para vencer";
dialogos[7] = "Os jogos das finais iriam ser jogados em São Paulo, eles ainda tinham uma longa viagem pela frente";
dialogos[8] = "Então, na madrugada que antecedia o final de semana dos jogos, todo o time embarcou no ônibus de viagem";
dialogos[9] = "A escola inteira esperava ansiosa para assistir a transmissão dos jogos que iria passar na TV";
dialogos[10] = "Mas o que eles viram foi na verdade uma notícia horrível que passou no jornal:";
dialogos[11] = '"Na madrugada desse sábado um ônibus que levava estudantes do ensino médio acabou sofrendo um acidente..."';
dialogos[12] = '"... Não houveram sobreviventes, todos os alunos morreram antes do socorro chegar"';
dialogos[13] = "Até hoje não se sabe o que ocasionou o acidente";
dialogos[14] = "Os meninos tinham se esforçado tanto para chegar na final, mas nem tiveram chances de jogá-la";
dialogos[15] = "Por isso, os alunos dessa escola acreditam que as almas do time de basquete vagam pela escola até hoje";
dialogos[16] = "Alguns alunos ja relataram terem visto, nessa quadra, um jogo de basquete em que não se podia ver os jogadores";
dialogos[17] = "Já imaginou? Um jogo de basquete onde só é possível ver a bola se movendo?";
dialogos[18] = "É por isso que estou aqui, quero ver com meus próprios olhos!";
dialogos[19] = "Olhe, tem algo se mexendo!!!";

const buttonNext = () => { 
    if(idDialogo != 20) {
        if(idDialogo == 0 || idDialogo == 15) {
          document.getElementById('personagem').innerHTML = '<img src="src/images/neutra.png">'
        }
        if(idDialogo == 10) {
          document.getElementById('personagem').innerHTML = '<img src="src/images/triste.png">'
        }
        if(idDialogo == 18) {
          document.getElementById('personagem').innerHTML = '<img src="src/images/feliz.png">'
        }
        if(idDialogo == 19) {
          document.getElementById('personagem').innerHTML = '<img src="src/images/medo.png">'
        }
        document.getElementById('dialogo').innerHTML = dialogos[idDialogo];
        idDialogo++;
    }
    else {
        var elemento = document.querySelector("#dialogo");
        elemento.parentNode.removeChild(elemento);
        elemento = document.querySelector("#next");
        elemento.parentNode.removeChild(elemento);
        var html = '<button id="start" onclick="start()">Olhar</button>';
        document.querySelector('#box').innerHTML = html;
    }
    
  };

  const start = () => { 
    var html = '<button id="start2" onclick="start()">Ver novamente</button>';
    document.querySelector('#box').innerHTML = html;
    document.querySelector('#start2').disabled = true;
    object.Game();
  };

  const habilitar = () => { 
    if(document.body.contains(document.querySelector('#start2'))) {
      document.querySelector('#start2').disabled = false; 
    }
  };

  const skip = () => { 
    var elemento = document.querySelector("#dialogo");
    elemento.parentNode.removeChild(elemento);
    elemento = document.querySelector("#next");
    elemento.parentNode.removeChild(elemento);
    var html = '<button id="start" onclick="start()">Olhar</button>';
    document.querySelector('#box').innerHTML = html;
  };