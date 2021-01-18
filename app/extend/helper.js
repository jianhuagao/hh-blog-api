'use strict';
const crypto = require('crypto');

module.exports = {
  encryptionPassword(pwd) {

    // this 是 helper 对象，在其中可以调用其他 helper 方法
    // this.ctx => context 对象
    // this.app => application 对象
    const salt = this.app.config.jwt.privateSecret;// 使用私钥加盐
    const hash = crypto.createHmac('sha512', salt); /** Hashing algorithm sha512 */
    const res = hash.update(pwd).digest('hex').substring(0, 12);
    return res;
  },
};
