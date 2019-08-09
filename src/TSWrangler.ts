import { build } from './build';
import { Project } from './project';
import { readFile } from './utils';

const args = process.argv.slice(2);

const project = JSON.parse(readFile(args[0])) as Project;

build(project);