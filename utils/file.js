import { readFileSync } from 'fs'

export function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

/**
 *
 * @param {number} date
 * @param {boolean} [dev=false]
 * @return {string} 
 */
export function getDataFile(date, dev = false) {
    return syncReadFile(dev ? `./days/${date}/input-dev.txt` : `./days/${date}/input.txt`)
}
