const modules: { [key: string]: any } = {};

function define(name: string, dependencies: string[], defineFunc: (...args: any[]) => {}): void {
    const defineArgs: any[] = [];
    const exports: any = {};

    for (const dependency of dependencies) {
        if (dependency === 'require') {
            defineArgs.push(require);
        } else if (dependency === 'exports') {
            defineArgs.push(exports);
        } else if (modules[dependency] !== undefined) {
            defineArgs.push(modules[dependency]);
        } else {
            defineArgs.push(require(dependency));
        }
    }
    
    defineFunc.apply(undefined, defineArgs);

    modules[name] = exports;
}
