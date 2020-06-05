const { promises: fs } = require("fs");

async function main() {
    const buffer = await fs.readFile("words.txt");
    for (var i = 0; i < buffer.length; i++) {
        const asciiCode = buffer[i];
        const char = String.fromCharCode(asciiCode);
        console.log(i + ":\t" + asciiCode + "\t" + char);
    }
}

main().catch(err => console.log(err));