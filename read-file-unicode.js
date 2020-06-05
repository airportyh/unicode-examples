const { promises: fs } = require("fs");

async function main() {
    const buffer = await fs.readFile("words.txt");
    const string = buffer.toString();
    for (let char of string) {
        console.log(char + " with length: " + char.length);
    }
}

main().catch(err => console.log(err));