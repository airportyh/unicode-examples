const { promises: fs } = require("fs");

async function main() {
    const tally = new Map();
    const string = (await fs.readFile("words.txt")).toString();
    const chars = Array.from(string);
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (tally.has(char)) {
            tally.set(char, tally.get(char) + 1);
        } else {
            tally.set(char, 1);
        }
    }
    
    const entries = Array.from(tally.entries());
    entries.sort((one, other) => other[1] - one[1]);
    for (let entry of entries) {
        const [key, value] = entry;
        console.log(key + ": " + value);
    }
}

main().catch(err => console.log(err.stack));