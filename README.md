# UniCipher Library 
![GitHub package.json version](https://img.shields.io/github/package-json/v/yuriy-klerk/UniCipher?label=NPM&style=for-the-badge)

by Intelligent Software. Yuriy Klerk.
### Install
```$xslt
npm i --save is-unicipher
```

### How to use

```javascript
import UniCipher from 'is-unicipher';

//or (for es < 6)
const UniCipher = require("is-unicipher"); 
```

##### Encrypt your text with some password:
```javascript
UniCipher.encrypt("somePassword", "somePlainText");
// result:
// {"iv":"HP7Ofi5LyCV8UdFk+G+vrA==","v":1,"iter":10000,"ks":128,"ts":64,"mode":"ccm","adata":"","cipher":"aes","salt":"owjDdsE364I=","ct":"wBislLExHndmo3YRwg=="}

```

##### Decrypt your cipher:
```javascript
UniCipher.decrypt("somePassword", "someCipher");
//Result
// somePlainText
```

## Products that use UniCipher

[![Alt text](https://callaba.io/img/logo-black.svg)](https://callaba.io/)


## License

[MIT](https://github.com/yuriy-klerk/UniCipher/blob/master/LICENSE.md)

