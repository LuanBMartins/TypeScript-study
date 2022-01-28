export abstract class View <T> {

    // O valor protected determina que os herdeiros podem acessar o elemento, porém ele ainda permanecerá privado em View
    protected element: HTMLElement

    constructor(seletor: string){
        this.element = document.querySelector(seletor)
    }

    abstract template(model: T): string 

    update(model: T): void {
        this.element.innerHTML = this.template(model)
    }
}