export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
