const { promises: fs } = require("fs");

async function main() {
    const tally = new Map();
    const buffer = await fs.readFile("words.txt");
    for (let i = 0; i < buffer.length; i++) {
        const char = String.fromCharCode(buffer[i]);
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