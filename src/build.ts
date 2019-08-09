import { Project } from './project';
import { createDirectory } from './utils';

export function build(project: Project): void {
    ensureOutputDirectories(project);
}

function ensureOutputDirectories(project: Project): void {
    createDirectory(project.outputDirectory);
}