function define(name, dependencies, defineFunc) {
    var windowAny = window;
    var defineArgs = [];
    var exports = {};
    for (var _i = 0, dependencies_1 = dependencies; _i < dependencies_1.length; _i++) {
        var dependency = dependencies_1[_i];
        if (dependency === 'exports') {
            defineArgs.push(exports);
        }
        else {
            defineArgs.push(windowAny[dependency]);
        }
    }
    defineFunc.apply(undefined, defineArgs);
    windowAny[name] = exports;
}
