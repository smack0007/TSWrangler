const modules: { [key: string]: any } = {};

function tswRequire(name: string): any {
    return modules[name];
}

function define(name: string, dependencies: string[], defineFunc: (...args: any[]) => {}): void {
    const defineArgs: any[] = [];
    const exports: any = {};

    for (const dependency of dependencies) {
        if (dependency === 'require') {
            defineArgs.push(tswRequire);
        } else if (dependency === 'exports') {
            defineArgs.push(exports);
        } else {
            defineArgs.push(modules[dependency]);
        }
    }
    
    defineFunc.apply(undefined, defineArgs);

    modules[name] = exports;
}
