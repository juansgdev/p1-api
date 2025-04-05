import fs from 'fs';

export const readMedia = (path) => {
    return fs.readFileSync(path, 'base64');
};
