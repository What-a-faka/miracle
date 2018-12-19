# 前端工程环境准备

### node
推荐使用[nvm](https://github.com/creationix/nvm)进行node版本库的管理，目前node 10的LTS版本为：v10.14.2，若已安装好nvm，只需要执行：`nvm install v10.14.2`即可。

### npm
node v10.14.2自带npm v6.4.1，对于npm模块的管理推荐使用`npm`命令来使用，如安装全局包、版本发布等。

### yarn
yarn主要应用于项目依赖管理，目前lts版本为：v1.12.3，使用yarn确实会比npm快一些，而且在目前的场景下，有的项目使用npm i会产生依赖错误，而yarn则正常，因此推荐在工程中使用yarn。常用命令如下：
- 依赖安装：`yarn`
- scripts执行：`yarn run SCRIPT_NAME`
- 安装依赖：`yarn add PACKAGE`、`yarn remove PACKAGE`
- 安装开发依赖：`yarn add -D PACKAGE`

另外，在项目中请提交yarn.lock，以此来保障系统的确定性。

### 编辑器
推荐前端们使用自己顺手的编辑器就行了，请不要提交本地的编辑器相关的配置文件即可。对于后端来讲，因为前端工程往往需要借助ESLint、Prettier等工具帮助统一规范，基本的代码提示也很有用，若您是Vim、Emacs等编辑器，或许需要一些时间进行配置，在这里统一推荐使用VSCode。

