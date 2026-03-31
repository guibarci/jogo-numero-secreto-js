/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; */
let listaDeNumerosSorteados = [];
let aleatorio = gerarAleatorio();
let tentativa = 1;

//Função para exibir texto na tela
function exibirTextoTela(tag, texto){//tag: h1, p, etc
    let campo = document.querySelector(tag);//Seleciona o campo onde o texto será exibido
    campo.innerHTML = texto;//Altera o conteúdo do campo
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirTextoTela('h1', 'Hora do Desafio');
exibirTextoTela('p', 'Escolha um número entre 1 e 10')

//Função para gerar numero aleatório
function gerarAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * 10 + 1);
    let quantidadeElementoLista = listaDeNumerosSorteados.length;

    if(quantidadeElementoLista == 10){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

    
function verificarChute(){
    console.log(aleatorio);
    let chute = document.querySelector('input').value; //Pega o valor do input (número escolhido pelo usuário)
    
    if (chute == aleatorio){
        exibirTextoTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Você acertou o número secreto com ${tentativa} ${palavraTentativa}!`;
        exibirTextoTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    }else {
        if(chute > aleatorio){
            exibirTextoTela('p', 'O númeor secreto é menor');
        }else{
            exibirTextoTela('p', 'O número secreto é maior');
        }
        tentativa++;
        limpaCampo();
    }

    
}

function limpaCampo(){
    document.querySelector('input').value = '';
}


function exibirMensagemInicial(){
    exibirTextoTela('h1', 'Hora do Desafio');
    exibirTextoTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function novoJogo() {
    aleatorio = gerarAleatorio(); // novo número aleatório
    tentativa = 1; // reseta tentativas
    exibirMensagemInicial();
    limpaCampo();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    
}
