const cryptoJs = require('crypto');

class Crypto {
  static encoding(string) {
    const time = Crypto.#nowTime();
    return Crypto.#md5Base64(string + time).slice(0, 6);
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
