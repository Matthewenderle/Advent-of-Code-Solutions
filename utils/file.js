import { readFileSync } from 'fs'

export function syncReadFile(filename) {
    const contents = readFileSync(filename, 'utf-8');
    const arr = contents.split(/\r?\n/);
    return arr;
}

/**
 *
 * @param {number} [year=2022]
 * @param {number} date
 * @param {boolean} [dev=false]
 * @return {string} 
 */
export function getDataFile(year = 2022, date, dev = false) {
    return syncReadFile(dev ? `./${year}/day-${date}/input-dev.txt` : `./${year}/day-${date}/input.txt`)
}
