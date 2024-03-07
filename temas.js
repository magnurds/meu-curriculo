//dom - document object model - modelo de objeto do documento
//transforma tudo na pagina em objetos, cada objeto recebe atributos e metodos associadas a ele

//funções
//function nomeDaFuncao(PARAMETROS) 
// corpo da funcao (o que ela vai fazer com os parametros e o que ela vai retornar para quem a chamou);)

// saber o  tema atual e obter o elemento do tema


// saber onde esta o atributo de tema

// se o botão for clicado, então...
document.querySelector('#btTrocaTema').addEventListener('click', function trocaTema() {
    // pegar o elelmento com o tema
    // se o tema for light, entao mude o atributo para dark
    // se não, então mude o atributo para light
    if (document.documentElement.getAttribute('data-tema') === 'light') {
        document.documentElement.setAttribute('data-tema' , 'dark');
    } else {
        document.documentElement.setAttribute('data-tema' , 'light');
    }

 });
    // trocar o tema:
// 1. pegar o elelmento com tema
// 2. apagar o atributo do tema atual
// 3. Escrever o atributo do novo tema
