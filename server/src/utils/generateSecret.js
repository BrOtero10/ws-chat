console.log("Starting secret generation...");

const crypto = require("crypto");

const secret = crypto.randomBytes(32).toString("hex"); // Gera uma string hexadecimal de 64 caracteres
console.log("Generated Secret:", secret);

console.log("Finished execution.");
