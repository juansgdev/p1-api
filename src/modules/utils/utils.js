import * as fs from 'fs';

export const readFile = (path) => {
    return fs.readFileSync(path).toString();
};

export const readJSON = (path) => {
    return JSON.parse(readFile(path));
};

export const readMedia = (path) => {
    return fs.readFileSync(path, 'base64');
};
