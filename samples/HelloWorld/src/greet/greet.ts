export function greet(name: string): Node {
    var greetTemplate = document.getElementById('greetingTemplate') as HTMLTemplateElement;
    (greetTemplate.content.querySelector('.name') as HTMLElement).innerText = name;
    return greetTemplate.content.cloneNode(true);
}