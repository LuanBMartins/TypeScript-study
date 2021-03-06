export abstract class View <T> {

    // O valor protected determina que os herdeiros podem acessar o elemento, porém ele ainda permanecerá privado em View
    protected element: HTMLElement

    // Param? : Opcional
    constructor(seletor: string){
        const element = document.querySelector(seletor)
        if(element){
            this.element = element as HTMLElement
        }else {
            throw new Error(`Seletor ${seletor} indefinido no DOM`)
        }
    }

    protected abstract template(model: T): string 

    // @logarTempoDeExecucao()
    // @inspect()
    public update(model: T): void {

        let template = this.template(model)
        this.element.innerHTML = template
    }
}