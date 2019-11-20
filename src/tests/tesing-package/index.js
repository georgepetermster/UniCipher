const UnicipherLibrary = require("is-unicipher");

const Unicipher = new UnicipherLibrary();

const encryped = Unicipher.encrypt("key", "value");

console.log(encryped);

const decrypted = Unicipher.decrypt("key", encryped);

console.log(decrypted)
