namespace MyApp {
    export class App extends HTMLElement {
        constructor() {
            super();
            const template = document.getElementById('App_Template') as HTMLTemplateElement;
            this.appendChild(template.content.cloneNode(true));
        }
    }
}

