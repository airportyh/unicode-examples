const { promises: fs } = require("fs");

async function main() {
    const buffer = (await fs.readFile("words.txt"));
    const string = buffer.toString();
    
    console.log("Char\tDecimal\tHex \tBinary");
    console.log("----\t-------\t----\t--------");
    
    for (let i = 0; i < string.length; i++) {
        const code = string.charCodeAt(i);
        const hex = code.toString(16).toUpperCase().padStart(4, "0");
        const binary = code.toString(2).padStart(16, "0");
        console.log(
            string[i] + "\t" + 
            code + "\t" + 
            hex + "\t" + 
            binary
        );
    }
    
    console.log("string length:", string.length);
}

main().catch(err => console.log(err.stack));