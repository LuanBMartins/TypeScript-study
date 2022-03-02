export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    texto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    compara(negociacoes) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes);
    }
}
//# sourceMappingURL=negociacoes.js.map