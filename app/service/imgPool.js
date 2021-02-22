'use strict';

const Service = require('egg').Service;
const fs = require('fs');
const path = require('path');

// 通过定义 Service 类的方式来编写代码，所有的 Service 文件都必须放在 app/service 目录下。
class ImgPoolService extends Service {
  async index() {
    const page = this.ctx.paging;// 分页
    const httpUrl = this.app.config.projectNet.http;// api base接口
    const localPath = this.app.config.projectNet.localPath;// 本地存图路径
    page || (this.ctx.status = 400);// 如果不分页不允许查询
    const files = await fs.readdirSync(localPath);// 获取目录下的文件集合
    let fileCountSize = 0;// 文件总占用
    // 文件详细信息
    const filesState = files.map(item => {
      const fileSatae = fs.statSync(path.resolve(localPath, item));// 文件状态获取
      const size = Number((fileSatae.size / 1024).toFixed(2));// 文件大小(kb)
      fileCountSize += size;
      return {
        url: httpUrl + '/img/' + item + '/image/png', // 这是返回的接口地址
        baseUrl: httpUrl, // baseurl
        fileName: item, // 文件名
        size, // 大小
        time: fileSatae.birthtime, // 上传时间
      };
    });
    filesState.sort((a, b) => b.time - a.time);// 按时间倒序
    const retFiles = filesState.filter((value, key) => { // 按分页进行筛选
      return ((key >= page.offset) && (key < (page.offset + page.limit)));
    });
    const ret = { count: files.length, countSize: Number(fileCountSize.toFixed(2)), rows: retFiles };
    return ret;
  }

  async destroy(id) {
    const localPath = this.app.config.projectNet.localPath;// 本地存图路径
    try {
      fs.unlinkSync(path.resolve(localPath, id));
      return 'ok';
    } catch (err) { this.ctx.status = '400'; }

  }
}

module.exports = ImgPoolService;
