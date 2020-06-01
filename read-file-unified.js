const { promises: fs } = require("fs");

async function main() {
    const buffer = (await fs.readFile("words.txt"));
    const chars = Array.from(buffer.toString());
    
    console.log("Char\tDecimal\tHex    \tUTF-32               \tUTF-8                              \tUTF-16-LE");
    console.log("----\t-------\t-------\t---------------------\t-----------------------------------\t---------------------------------");
    
    for (let char of chars) {
        const codePoint = char.codePointAt(0);
        const hexCodePoint = codePoint.toString(16).padStart(6, "0");
        const binCodePoint = codePoint.toString(2).padStart(21, "0");
        const utf16 = char.split("").map(chr => 
            chr.charCodeAt(0).toString(2).padStart(16, "0")).join(" ");
        const utf8 = bufferToBinary(Buffer.from(char));
        
        console.log(
            char + "\t" + 
            codePoint + "\t" + 
            hexCodePoint + "\t" + 
            binCodePoint + "\t" +
            utf8 + "\t" +
            utf16
        );
    }
    
    console.log("number of real chars:", chars.length);
}

function stringToBinary(string) {
    // char.split("").map(chr => 
    // chr.charCodeAt(0).toString(2).padStart(16, "0")).join(" ");
    let chunks = [];
    for (let i = 0; i < 
}

function bufferToBinary(buffer) {
    let chunks = [];
    for (let i = 0; i < buffer.length; i++) {
        chunks.push(buffer[i].toString(2).padStart(8, "0"));
    }
    return chunks.join(" ").padEnd(32, " ");
}

main().catch(err => console.log(err.stack));