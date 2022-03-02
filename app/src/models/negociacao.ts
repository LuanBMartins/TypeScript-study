
import { Modelo } from "../interfaces/modelo.js";


export class Negociacao implements Modelo<Negociacao> {
   
    constructor(
        private _data: Date, 
        public readonly quantidade: number, 
        public readonly valor: number
    ){
      
    }

    public static criaDe(data: string, quantidade: string, valor: string): Negociacao {
        return new Negociacao(
            new Date(data.replace('/-/g', ',')),
            parseInt(quantidade),
            parseFloat(valor)
        )
    }

    get volume(): number {
        return this.valor * this.quantidade
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data
    }

    public texto(): string {
        return `
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
        `;
    }

    public compara(negociacao: Negociacao): boolean {
        return this.data.getDate() === negociacao.data.getDate() 
            && this.data.getMonth() === negociacao.data.getMonth()
            && this.data.getFullYear() === negociacao.data.getFullYear()
    }

}