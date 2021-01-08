const path = require("path");

const resolve = dir => path.resolve(__dirname, dir);
/*
* "@craco/craco": "^5.6.4"需要安装
*  "scripts": {
*    "start": "craco start",
 *   "build": "craco build",
 *   "test": "craco test",
 *   "eject": "react-scripts eject"
 * },
 * script中的命令也需要改

*/
module.exports = {
    webpack: {
        alias: {
            "@": resolve("src"), // 配置别名
            "components": resolve("src/components") // 配置别名
        }
    }
}
