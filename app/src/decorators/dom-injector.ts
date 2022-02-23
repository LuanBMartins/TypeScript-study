export function domInjector(seletor: string) {
    return function(target: any, propertyKey: string){

        let elemento: HTMLElement

        const getter = function() {

            if(!elemento){
                elemento = <HTMLElement>document.querySelector(seletor)
            }
            //teste
            return elemento
        }

        // injetando um get no propertyKey
        Object.defineProperty(
            target, 
            propertyKey, 
            { get: getter })
    }
}