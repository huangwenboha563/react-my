const CracoLessPlugin = require('craco-less');
// node环境自带的path模块
const path = require("path");
const resolve = dir => path.resolve(__dirname, dir);
/*eject这个命令可以将webpack的配置暴露出来*/
// 只要配置文件修改，重新启动服务，重新变异
module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    }
  ],
  webpack: {
    alias: {
      "@": resolve("src"),
      "components": resolve("src/components")
    }
  }
}
/*
* 介于cra创建的react项目
* 1.如果跨域可以在package.json里面配置proxy
* 2.如果需要配置比较复杂的跨域，可以安装这个http-proxy-middleware  src/setupProxy.js去配置
*
*
* */