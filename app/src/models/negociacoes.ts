import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes>{

    private negociacoes: Array<Negociacao> = []

    public adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao)
    }

    public lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes
    }

    public texto(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public compara(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes)
    }
}

