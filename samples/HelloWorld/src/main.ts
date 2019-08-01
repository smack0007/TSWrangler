import { greet } from './greet/greet';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app') as HTMLElement;
    app.appendChild(greet('Foo'));
});
