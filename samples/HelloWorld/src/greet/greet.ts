export function greet(name: string): HTMLElement {
    var greetTemplate = document.getElementById('HelloWorld-greet') as HTMLTemplateElement;
    var node = greetTemplate.content.cloneNode(true) as HTMLElement;
    console.dir(node);
    return node;
}