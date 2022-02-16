export class View {
    constructor(seletor, escapar) {
        const element = document.querySelector(seletor);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`Seletor ${seletor} indefinido no DOM`);
        }
        this.escapar = escapar ? true : false;
    }
    update(model) {
        let template = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
