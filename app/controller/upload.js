'use strict';
const Multer = require('koa-multer');
const Controller = require('egg').Controller;
const fs = require('fs');

class UploadController extends Controller {
  constructor(ctx) {
    super(ctx);
    this.baseUrl = this.app.config.projectNet.http;
    this.destPath = '../img';
  }
  // 上传图片,直接返回显示接口
  // https://api.gaojianhua.top/api/v1/img/d894efa8751da4a8cb5ef211d231fb5e/image/jpeg
  async uploadImg() {
    const { ctx } = this;
    const uploadDest = Multer({
      dest: this.destPath,
    });
    const imgHandler = uploadDest.single('img');
    await imgHandler(ctx);
    const { filename, mimetype } = ctx.req.file;
    console.log(mimetype);
    ctx.body = `${this.baseUrl}/img/${filename}/${mimetype}`;
  }
  // 显示图片
  // https://api.gaojianhua.top/api/v1/img/d894efa8751da4a8cb5ef211d231fb5e/image/jpeg
  async getImg() {
    const { ctx } = this;
    const filename = ctx.params.id;
    const mimetype = ctx.params.type + '/' + ctx.params.end;
    ctx.response.set('content-type', mimetype);
    ctx.body = fs.createReadStream(`${this.destPath}/${filename}`);
  }
}

module.exports = UploadController;
