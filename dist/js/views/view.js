export class View {
    // Param? : Opcional
    constructor(seletor, escapar) {
        this.element = document.querySelector(seletor);
        this.escapar = escapar ? true : false;
        console.log('escapar:', this.escapar);
    }
    update(model) {
        let template = this.template(model);
        // Remove scripts maliciosos
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
