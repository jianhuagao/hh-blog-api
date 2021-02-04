'use strict';
const path = require('path');
const fs = require('fs');

const exec = async () => {
  const modelPath = path.resolve(__dirname, '../app/model');
  const files = await fs.readdirSync(modelPath);
  for (const file of files) {
    const filePath = path.resolve(modelPath, file);
    if (file === 'init-models.js') {
      await fs.unlinkSync(filePath);
    } else {
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) throw err;
        let newContent = data;
        // 检测是否开启严格模式"use strict";
        const isStrict = newContent.search('use strict');
        if (isStrict !== 1) {
          newContent = `"use strict";\n${newContent}`;
        }
        newContent = newContent.replace('function(sequelize, DataTypes)', 'function ({ model: sequelize, Sequelize: DataTypes })');
        fs.writeFile(filePath, newContent, 'utf8', err => {
          if (err) throw err;
          console.log(`${file}:生成成功`);
        });
      });
    }
  }
};

exec();
