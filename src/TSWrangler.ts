function define(name: string, dependencies: string[], defineFunc: (...args: any[]) => {}): void {
    const windowAny = window as any;
    const defineArgs: any[] = [];
    const exports: any = {};

    for (const dependency of dependencies) {
        if (dependency === 'exports') {
            defineArgs.push(exports);
        } else {
            defineArgs.push(windowAny[dependency]);
        }
    }
    
    defineFunc.apply(undefined, defineArgs);

    windowAny[name] = exports;
}
