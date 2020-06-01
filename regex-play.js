const idRegex = /[\p{Alpha}_][\p{Alpha}0-9_]*/u;
const quoteRegex = /[\p{Pi}](.*)[\p{Pf}]/u;
const paransRegex = /[\p{Ps}-[^{[]](.*)[\p{Pe}-[^}\]]]/u;
/*console.log("名".match(idRegex));
console.log("性9".match(idRegex));
console.log("name".match(idRegex));
console.log("age9".match(idRegex));*/

console.log("“你好👌”".match(quoteRegex));
console.log("（爸爸）".match(paransRegex));
console.log("[妈吗]".match(paransRegex));
console.log("{歌歌}".match(paransRegex));
