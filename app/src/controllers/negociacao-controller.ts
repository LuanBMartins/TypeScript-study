import { domInjector } from "../decorators/dom-injector.js"
import { inspect } from "../decorators/inspect.js"
import { logarTempoDeExecucao } from "../decorators/logar-tempo-execucao.js"
import { DiaDaSemana } from "../enums/dias-da-semana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { NegociacoesService } from "../services/negociacoes-service.js"
import { imprimir } from "../utils/imprimir.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {

    @domInjector('#data')
    private inputData: HTMLInputElement

    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement

    @domInjector('#valor')
    private inputValor: HTMLInputElement
    
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')
    private negociacaoService = new NegociacoesService()

    constructor() {
        // this.inputData = document.querySelector('#data') as HTMLInputElement
        // this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement
        // this.inputValor = document.querySelector('#valor') as HTMLInputElement
        this.negociacoesView.update(this.negociacoes)
    }

    @logarTempoDeExecucao()
    @inspect()
    public adiciona(): void {
       
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if(!this.diaUtil(negociacao.data)){
            this.mensagemView.update('Apenas negociações em dias úteis são aceitas!')
            return
        }
        
        this.negociacoes.adiciona(negociacao)
        // console.log(negociacao.texto());
        // console.log(this.negociacoes.texto());
        imprimir(negociacao, this.negociacoes)
        
        
        this.limparFormulario()
        this.atualizaView()
    }

    public importarDados(): void {
        this.negociacaoService.obterNegociacoes()
            .then(negociacoesDeHoje => {
                return negociacoesDeHoje.filter(negociacaoDeHoje => {
                    return !this.negociacoes.lista().some(negociacao => negociacao.compara(negociacaoDeHoje))
                })
            })
            .then(negociacoesDeHoje => {
                for(let negociacao of negociacoesDeHoje) {
                    this.negociacoes.adiciona(negociacao)
                }

                this.negociacoesView.update(this.negociacoes)
            })
    }

    private diaUtil(date: Date): boolean {
        return date.getDay() != DiaDaSemana.SABADO && date.getDay() != DiaDaSemana.DOMINGO
    } 

    private limparFormulario(): void {
        this.inputData.value = ''
        this.inputQuantidade.value = ''
        this.inputValor.value = ''
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update('Negociação adicionada!')
    }
}