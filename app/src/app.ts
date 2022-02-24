import { NegociacaoController } from './controllers/negociacao-controller.js'


const controller = new NegociacaoController()

const form = document.querySelector('.form')
if(form){
    form.addEventListener('submit', event => {
        event.preventDefault()
    
        controller.adiciona()
    })
}else{
    throw new Error('Erro na inicialização da Aplicação . Form:NULL')
}

const botaoImporta = document.querySelector('#botao-importar')
if(botaoImporta){
    
    botaoImporta.addEventListener('click', event => {
        event.preventDefault()

        controller.importarDados()
    })
}else{
    throw new Error('Botão *importar* não foi encontrado!')
}





