const { promises: fs } = require("fs");

async function main() {
    const buffer = (await fs.readFile("words.txt"))
    const chars = buffer.toString();
    
    console.log("Char\tDecimal\tHex\tBinary");
    console.log("----\t-------\t---\t--------");
    
    for (let i = 0; i < buffer.length; i++) {
        const code = buffer[i];
        const char = String.fromCharCode(code);
        const hex = code.toString(16).toUpperCase();
        const binary = code.toString(2).padStart(8, "0");
        console.log(
            char + "\t" + code + 
            "\t" + hex + 
            "\t" + binary
        );
    }
    
    console.log("buffer size:", buffer.length);
}

main().catch(err => console.log(err.stack));