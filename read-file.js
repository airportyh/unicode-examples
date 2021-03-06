const { promises: fs } = require("fs");

async function main() {
    const buffer = await fs.readFile("words.txt");
    const string = buffer.toString();
    for (var i = 0; i < string.length; i++) {
        const char = string[i];
        console.log(i + ": " + char);
    }
}

main().catch(err => console.log(err));