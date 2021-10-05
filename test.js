import regexp_tree from "regexp-tree";
const { parse, traverse } = regexp_tree;

var x = parse("/[!]/");
console.log(JSON.stringify(x));

// {"type":"RegExp","body":{"type":"CharacterClass","expressions":[{"type":"Char","value":"!","kind":"simple","symbol":"!","codePoint":33}]},"flags":""}
