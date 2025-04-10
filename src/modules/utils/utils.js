import * as fs from 'fs';

export const readFile = (path) => {
    try {
        return fs.readFileSync(path);
    } catch (error) {
        console.error(error);
    }

    //return fs.readFileSync(path).toString();
};

export const readJSON = (path) => {
    return JSON.parse(readFile(path));
};

export const readMedia = (path) => {
    return fs.readFileSync(path, 'base64');
};