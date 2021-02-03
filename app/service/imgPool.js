'use strict';

const Service = require('egg').Service;
const fs = require('fs');


// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class ImgPoolService extends Service {
  async index() {
    const page = this.ctx.paging;
    const httpUrl = this.app.config.projectNet.http;
    page || (this.ctx.status = 400);
    const files = await fs.readdirSync('../img');
    const retFiles = files.filter((value, key) => {
      return ((key >= page.offset) && (key < (page.offset + page.limit)));
    });
    const retUrl = retFiles.map(item => {
      return {
        url: httpUrl + '/' + item + '/image/png',
        baseUrl: httpUrl,
        fileName: item,
      };

    });
    const ret = { count: files.length, rows: retUrl };
    return ret;
  }

  async destroy(id) {
    try {
      fs.unlinkSync(`../img/${id}`);
      return 'ok';
    } catch (err) { this.ctx.status = '400'; }

  }
}

module.exports = ImgPoolService;
