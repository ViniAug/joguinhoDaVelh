
// tabuleiro
const app = angular.module('jogo', []);

app.controller('QuadradosController', ($scope) => {
    let ultimoQuadradoClicado;

    $scope.quadrados = [
        {id: 1, classe: '', curiosidade:'To falando aqui'},
        {id: 2, classe: '', curiosidade:'To dizendo nada'},
        {id: 3, classe: '', curiosidade:'To maizena'},
        {id: 4, classe: '', curiosidade:'To queijo'},
        {id: 5, classe: '', curiosidade:'To dsjhskjjs'},
        {id: 6, classe: '', curiosidade:'To haha'},
        {id: 7, classe: '', curiosidade:'To ssshjsjs'},
        {id: 8, classe: '', curiosidade:'To supimpa'},
        {id: 9, classe: '', curiosidade:'To sonim bleinim'}
    ];
    
    $scope.ativar = (quadrado) => {
        $scope.escolha = true;
        quadrado.classe = 'ativo';
        curiosidade = quadrado.curiosidade;
        ultimoQuadradoClicado = quadrado;                              
    }

    $scope.escolherJogada = (tipo) => {
        ultimoQuadradoClicado.classe = tipo;
        $scope.escolha = false;
    }

    
    

    $scope.finalizarPartida = () => {
        if((($scope.quadrados[0].classe != '') && ($scope.quadrados[1].classe != '') && ($scope.quadrados[2].classe != '') && ($scope.quadrados[0].classe == $scope.quadrados[1].classe) && ($scope.quadrados[1].classe == $scope.quadrados[2].classe)) ||
         (($scope.quadrados[3].classe != '') && ($scope.quadrados[4].classe != '') && ($scope.quadrados[5].classe != '') && ($scope.quadrados[3].classe == $scope.quadrados[4].classe) && ($scope.quadrados[4].classe == $scope.quadrados[5].classe)) ||
         (($scope.quadrados[6].classe != '') && ($scope.quadrados[7].classe != '') && ($scope.quadrados[8].classe != '') && ($scope.quadrados[6].classe == $scope.quadrados[7].classe) && ($scope.quadrados[7].classe == $scope.quadrados[8].classe)) ||
         (($scope.quadrados[0].classe != '') && ($scope.quadrados[3].classe != '') && ($scope.quadrados[6].classe != '') && ($scope.quadrados[0].classe == $scope.quadrados[3].classe) && ($scope.quadrados[3].classe == $scope.quadrados[6].classe)) ||
         (($scope.quadrados[1].classe != '') && ($scope.quadrados[4].classe != '') && ($scope.quadrados[7].classe != '') && ($scope.quadrados[1].classe == $scope.quadrados[4].classe) && ($scope.quadrados[4].classe == $scope.quadrados[7].classe)) ||
         (($scope.quadrados[2].classe != '') && ($scope.quadrados[5].classe != '') && ($scope.quadrados[8].classe != '') && ($scope.quadrados[2].classe == $scope.quadrados[5].classe) && ($scope.quadrados[5].classe == $scope.quadrados[8].classe)) ||
         (($scope.quadrados[0].classe != '') && ($scope.quadrados[4].classe != '') && ($scope.quadrados[8].classe != '') && ($scope.quadrados[0].classe == $scope.quadrados[4].classe) && ($scope.quadrados[4].classe == $scope.quadrados[8].classe)) ||
         (($scope.quadrados[6].classe != '') && ($scope.quadrados[4].classe != '') && ($scope.quadrados[2].classe != '') && ($scope.quadrados[6].classe == $scope.quadrados[4].classe) && ($scope.quadrados[4].classe == $scope.quadrados[2].classe)) ){
            console.log('deu certo');         
        }
    }

});



// animação personagem

let fala = document.querySelector('.fala');
let personagem = document.querySelector('.personagem');
let falando = false;

function animacaoPersonagem(){

    if (falando){
        fala.src = 'astronautaP.png';
        falando = false;
    } else {
        fala.src = 'astronautaP2.png';
        falando = true;
    }  
}

  let batata2 = setInterval(animacaoPersonagem, 400);


//   fala da personagem no balao

    let frase = 'Seja muito bem vindo a estação hack, aqui você terá a oportunidade de obter o conhecimento de um de nossos astros localizado no nosso sistema solar, boa aventura!';      
    // let frase = 'ola sadssad';
    let p = document.querySelector('p');
    let contador = 0;
    let sumir = false;


      function exibirLetra(){
        let letra = frase[contador];

        p.innerHTML += letra;
        contador++;

        if(contador >= frase.length){
          clearInterval(batata);
          clearInterval(batata2);
          fala.src = 'astronautaP2.png';
        //   personagem.style.display = 'none';
          
        }
      }
    
    //   function sumirPersonagem(){
    //       personagem.style.display = 'none';
    //   }
    //   setInterval(sumirPersonagem, 15000);

      let batata = setInterval(exibirLetra, 70);

  