const cryptoJs = require('crypto');

class Crypto {
  static encoding(string) {
    const time = Crypto.#nowTime();
    const regex = /[^0-9a-zA-Z]/g;
    const cryptoString = Crypto.#md5Base64(string + time).replace(regex, '');
    return cryptoString.slice(0, 6);
  }

  static #nowTime() {
    return new Date().getTime();
  }

  static #md5Base64(string) {
    return cryptoJs.createHash('md5').update(string)
      .digest('base64');
  }
}

module.exports = Crypto;
