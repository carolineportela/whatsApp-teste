'use strict'

import { contatos } from "./contatos.js"

let cont = 0
const adicionarId = (contato) => {
    contato.id = cont++
    return contato
}

const contatos2 = contatos.map(adicionarId)

console.log(contatos2)
const criarCard = (contato, indice) => {
    // const mensagem = document.createElement('ul')
    // mensagem.classList.add('container-mensagens')

    // const mensagem = document.getElementById('container-mensagens')

    const conversa = document.createElement('div')
    conversa.classList.add('container-conversas')
    conversa.setAttribute('id', 'id-' + indice)
    conversa.onClick = 'teste()'

    const foto = document.createElement('img')
    foto.classList.add('img-chat')
    foto.src = `./imagens/contact1.png`

    const informacao = document.createElement('div')
    informacao.classList.add('container-info')

    const perfil = document.createElement('div')
    perfil.classList.add('container-perfil')




    const nome = document.createElement('span')
    nome.textContent = contato.name

    const descricao = document.createElement('span')
    descricao.classList.add('info-conversa')
    descricao.textContent = contato.description

    const hora = document.createElement('div')
    hora.classList.add('hora')
    hora.textContent = contato.hora

    // mensagem.append(conversa)

    conversa.append(foto, informacao, nome, hora)

    informacao.append(perfil)

    perfil.append(nome, descricao)

    return conversa

}

const carregarContatos = () => {
    const container = document.getElementById('container-mensagens')
    const contatosMensagens = contatos.map(criarCard)

    container.replaceChildren(...contatosMensagens)
}

// const acaoDoButao = document.getElementById('')

function teste(event) {
    console.log(event.target.id)
}


// const loop = function () {
//     let contador = 0;
//     while(contador < contatos[contador].legth){
//         console.log('teste' + contador)

//         contador++
//         return contador
//     }

// }

carregarContatos()

// const container = document.getElementById('container')



// console.log (containerConversas)

// container.addEventListener('click', teste)
