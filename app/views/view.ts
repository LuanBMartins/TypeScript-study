export abstract class View <T> {

    // O valor protected determina que os herdeiros podem acessar o elemento, porém ele ainda permanecerá privado em View
    protected element: HTMLElement
    private escapar: boolean

    // Param? : Opcional
    constructor(seletor: string, escapar?: boolean){
        const element = document.querySelector(seletor)
        if(element){
            this.element = element as HTMLElement
        }else {
            throw new Error(`Seletor ${seletor} indefinido no DOM`)
        }

        this.escapar = escapar ? true : false
    }

    protected abstract template(model: T): string 

    public update(model: T): void {
        let template = this.template(model)

        // Remove scripts maliciosos
        if (this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '')
        }

        this.element.innerHTML = template
    }
}