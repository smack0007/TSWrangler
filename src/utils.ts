import * as fs from 'fs';

export function createDirectory(path: string): void {
    if (!fs.existsSync(path)){
        fs.mkdirSync(path);
    }
}

export function readFile(path: string): string {
    return fs.readFileSync(path, { encoding: 'utf8' }) as string;
}