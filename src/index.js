const UniCipherLibrary = require("./clb-seq.bundle.js");

class UniCipher {

    encrypt(key, data) {
        return UniCipherLibrary.encrypt(key, data);
    }

    decrypt(key, cipher) {
        return UniCipherLibrary.decrypt(key, cipher);
    }
}

module.exports = UniCipher;

