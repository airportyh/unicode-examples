const { promises: fs } = require("fs");

async function main() {
    const buffer = (await fs.readFile("words.txt"));
    const chars = Array.from(buffer.toString());
    
    console.log("Char\tDecimal\tHex     \tBinary");
    console.log("----\t-------\t--------\t---------------------");
    
    for (let char of chars) {
        const codePoint = char.codePointAt(0);
        const hex = codePoint.toString(16).padStart(8, "0");
        const binary = codePoint.toString(2).padStart(21, "0");
        console.log(
            char + "\t" + codePoint + 
            "\t" + hex + 
            "\t" + binary
        );
    }
    
    console.log("number of real chars:", chars.length);
}

main().catch(err => console.log(err.stack));