'use strict'

import {contatos} from "./contatos.js"

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', (event) => {
       // carregarMensagens(conversas)

      
        console.log(contatos[indice])

    })

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `./imagens/contact1.png`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    conversa.append(foto, informacao, nome)

    informacao.append(nome, descricao)

    return conversa

}

const criarConversa = (message) => {

    const mensagem = document.createElement('div')
    mensagem.classList.add('container-mensagens-direita')

    const caixaMinha = document.createElement('div')
    caixaMinha.classList.add('caixa-mensagens-minha')

    const caixaSua = document.createElement('div')
    caixaSua.classList.add('caixa-mensagens-sua')

    const msgMinha = document.createElement('p')
    msgMinha.classList.add('msg-minha')
    msgMinha.textContent = message.messages

    const horaMinha = document.createElement('span')
    horaMinha.classList.add('hora-minha')
    horaMinha.textContent = message.messages

    const msgSua = document.createElement('p')
    msgSua.classList.add('msg-sua')
    msgSua.textContent = message.messages.content

    const horaSua = document.createElement('span')
    horaSua.classList.add('hora-sua')
    horaSua.textContent = message.messages.time

    mensagem.append(msgMinha, horaMinha, msgSua, horaSua)

    return mensagem
    

}

const carregarContatos = () => {
    const container = document.getElementById('container')
    const contatosMensagens = contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

carregarContatos()


const carregarMensagens = () => {
    const mensagem = document.getElementById('mensagem')
    const conversas = contatos.map(criarConversa)
    mensagem.replaceChildren(...conversas)
   
}
var div = document.getElementById('container-mensagens');

div.addEventListener('click', function() {

    var container = document.getElementById('containerD');

    container.classList.toggle('hide');

});
//console.log(carregarMensagens);

carregarMensagens()

