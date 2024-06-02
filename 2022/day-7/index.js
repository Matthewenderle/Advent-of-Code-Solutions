// https://adventofcode.com/2022/day/7
import fs from 'fs';

const devMode = process.argv.includes('-dev') ? '-dev' : '';
let t = devMode ? process.hrtime() : null;
const commands = fs.readFileSync(`./2022/day-7/input${devMode}.txt`).toString().split('\r\n');

let fileSystemTree = {'/': {}};

const parseCommands = (commands) => {
    let path = ['/'];
    let currentDir = fileSystemTree['/'];

    commands.forEach(command => {
        if (command.startsWith('$ cd')) {
            const dir = command.split(' ')[2];
            if (dir === '/') {
                path = ['/'];
                currentDir = fileSystemTree['/'];
            } else if (dir === '..') {
                path.pop();
                currentDir = path.reduce((acc, p) => acc[p], fileSystemTree);
            } else {
                path.push(dir);
                if (!currentDir[dir]) currentDir[dir] = {};
                currentDir = currentDir[dir];
            }
        } else if (command.startsWith('$ ls')) {
            // ls command, skip to next iteration
        } else {
            const [size, name] = command.split(' ');
            if (!isNaN(parseInt(size))) {
                currentDir[name] = parseInt(size);
            }
        }
    });
};

const du = (dir, {minSize = 0, maxSize = Infinity, recursive = false} = {}) => {
    let diskUsage = 0;

    const calc = (currentDir) => {
        Object.keys(currentDir).forEach(key => {
            if (typeof currentDir[key] === 'object') {
                const subDirSize = du(currentDir[key], {minSize, maxSize, recursive: true});
                if (recursive && subDirSize <= maxSize) {
                    diskUsage += subDirSize;
                }
            } else {
                if (currentDir[key] >= minSize && currentDir[key] <= maxSize) {
                    diskUsage += currentDir[key];
                }
            }
        });
    };

    calc(dir);

    return diskUsage;
};

const sumTargetDirectorySizes = (filesystem, { minSize = 0, maxSize=Infinity, recursive = true } = {}) => {
    let totalSum = 0;
    let smallestSize = Infinity;

    const sum = (dir) => {
        const dirSize = du(dir, {minSize: 0, maxSize: Infinity, recursive: true});
        if (dirSize >= minSize && dirSize <= maxSize) {
            totalSum += dirSize;
            if (minSize && dirSize < smallestSize) {
                smallestSize = dirSize;
            }
        }
        Object.keys(dir).forEach((key, value) => {
            if (typeof dir[key] === 'object') {
                sum(dir[key]);
            }
        });
    };

    sum(filesystem);
    if (minSize) return smallestSize
    return totalSum;
};

const part1 = () => {
    parseCommands(commands);

    const totalSize = sumTargetDirectorySizes(fileSystemTree['/'], {maxSize:100000});

    return totalSize;
};

const part2 = () => {
    let result = 0;

    const totalSpace = 70000000
    const spaceNeeded = 30000000;
    const totalSpaceUsed = du(fileSystemTree,{recursive:true}); // 48381165
    const unusedSpace = totalSpace - totalSpaceUsed // 21618835
    const minNeeded = spaceNeeded - unusedSpace

    result = sumTargetDirectorySizes(fileSystemTree['/'], {minSize: minNeeded});

    return result;
};

const part1Result = part1();
const part2Result = part2();

if (devMode) {
    const part1Expected = 95437;
    const part2Expected = 24933642;
    console.log(part1Result !== part1Expected ? `❌ Part 1: ${part1Result} != ${part1Expected}` : `✅ Part 1: is correct 🌟`);
    console.log(part2Result !== part2Expected ? `❌ Part 2: ${part2Result} != ${part2Expected}` : `✅ Part 2: is correct 🌟`);
    t = process.hrtime(t);
    console.log('benchmark took %d seconds and %d nanoseconds', t[0], t[1]);
} else {
    console.log(`Part 1:The sum of all directory sizes over 100000 is: ${part1Result}`);
    console.log(`Part 2: The size of the directory to remove is: ${part2Result}`);
}
