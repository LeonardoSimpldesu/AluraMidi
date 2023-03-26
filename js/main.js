//CRIAÇÃO DAS VARIÁVEIS
const listaDeTeclas = document.querySelectorAll("[data-tecla]")
const listaDeSons = document.querySelectorAll("[data-som]")
//FUNÇÃO PARA RECEBER O NOME DO AUDIO E TOCA-LO
function tocaSom (ElementoAudio){
    document.querySelector(`[data-som="${ElementoAudio}"]`).play()
}

//FORMA ENSINADA NO CURSO DA ALURA USANDO "FOR"
/* for (let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador]
    const audio = tecla.dataset.tecla
    tecla.onclick = () =>{
        tocaSom(audio)
    }
    tecla.onkeydown = (evento) =>{
        if(evento.code =='Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa')
        }
    }
    tecla.onkeyup = () =>{
        tecla.classList.remove('ativa')
    }
} */

//ADAPTAÇÃO PARA FOREACH E EVENTLISTENER
listaDeTeclas.forEach((elemento) =>{
//ATRIBUINDO O NOME DOS AUDIOS
     const audio = elemento.dataset.tecla
//FUNCAO AO CLICAR NO ELEMENTO, ENVIAR AUDIO A FUNCAO
    elemento.addEventListener("click", () =>{
        tocaSom(audio)
    })
//FUNCAO AO APERTAR TECLA SPAÇO OU ENTER, ADICIONAR CLASS ATIVA
    elemento.addEventListener("keydown", (evento) =>{
        if(evento.code =='Space' || evento.code == 'Enter') {
            elemento.classList.add('ativa')
        }
    })
//FUNCAO AO SOLTAR A TECLA, REMOVER CLASS ATIVA
    elemento.addEventListener("keyup", () =>{
        elemento.classList.remove('ativa')
    })
}) 