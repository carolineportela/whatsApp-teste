'use strict'

import { contatos } from "./contatos.js"

const criarCard = (contato, indice) => {

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')

    conversa.addEventListener('click', (event) => {
        var container = document.getElementById('container-chat')
        container.replaceChildren(criarMensagem(indice))
        container.appendChild(criarHeader(indice))
        // coontainer.appendChild(carregarMessageBar(indice))
    })

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `./imagens/${contato.image}`

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

const criarHeader = (indice) => {

    const header = document.createElement('div')
    header.classList.add('header-direito');

    const containerHeader = document.createElement('div')
    containerHeader.classList.add('container-header');

    const imagemPerfil = document.createElement('img')
    imagemPerfil.classList.add('img-perfil');
    imagemPerfil.src = `../img/${contatos[indice].image}`

    const containerPerfil = document.createElement('div')
    containerPerfil.classList.add('container-perfil')

    const infoNome = document.createElement('span')
    infoNome.classList.add('info-nome')
    infoNome.textContent = contatos[indice].name

    const infoConversa = document.createElement('span')
    infoConversa.classList.add('info-conversa')
    infoConversa.textContent = 'online'

    containerPerfil.append(infoNome, infoConversa)
    
    containerHeader.append(imagemPerfil, containerPerfil)
    
    header.append(containerHeader)

    return header

}

  const carregarMessageBar = () => {
    const message__bar = document.getElementById('messageBar')
    message__bar.classList.remove('chatBox_input')
    message__bar.classList.add('messageBar')
   
    return messageBar
}
   const criarMensagem = (indice) => {

    const containerMensagensDireita = document.createElement('div')
    containerMensagensDireita.classList.add('container-mensagens-direita');

    contatos[indice].messages.forEach((mensagem) => {

        const caixaMensagensMinha = document.createElement('div')
        caixaMensagensMinha.classList.add('caixa-mensagens-minha')

        const caixaMensagensSua = document.createElement('div')
        caixaMensagensSua.classList.add('caixa-mensagens-sua')

        const msgMinha = document.createElement('p')
        msgMinha.classList.add('msg-minha')

        const horaMinha = document.createElement('span')
        horaMinha.classList.add('hora-minha')

        const msgSua = document.createElement('p')
        msgSua.classList.add('msg-sua')

        const horaSua = document.createElement('span')
        horaSua.classList.add('hora-sua')

        if (mensagem.sender == 'me') {
          
            msgMinha.classList.add('msg-minha')
            msgMinha.textContent = mensagem.content

            horaMinha.classList.add('hora-minha')
            horaMinha.textContent = mensagem.time
            caixaMensagensMinha.append(msgMinha, horaMinha)

          
        } else {
            
            msgSua.classList.add('msg-sua')
            msgSua.textContent = mensagem.content

            horaSua.classList.add('hora-sua')
            horaSua.textContent = mensagem.time

            caixaMensagensSua.append(msgSua, horaSua)

           
            
        }
        containerMensagensDireita.append(caixaMensagensMinha, caixaMensagensSua)
    })

    return containerMensagensDireita

}

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.map(criarCard)
    container.replaceChildren(...contatosMensagens)
}

carregarContatos()