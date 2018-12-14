# @what-a-faka/vue-authplugin
统一localStorage的操作，接口与`window.localstorage`保持一致。主要功能位自动JSON.parse与JSON.stringify，并且可封装一些快捷操作

## 初始化
首先，安装依赖：
```
$ npm install @what-a-faka/storage
```
然后在项目中导入即可使用：
```
import storage from '@what-a-faka/storage'

storage.getItem('')
```

## getItem(key, paramPath, paramDefault = '')
同localStorage.getItem，有点不同是的，在这里集成了`lodash.get`方法，也就是说，若传入第2、3个参数，等同于：
```
_.get(localStorage.getItem(key), paramPath, paramDefault))
```

- 参数：
  - {string} key
  - {string} paramPath
  - {string} paramDefault, 默认值：''

## setItem
同localStorage。

## clear
同localStorage。

## removeItem
同localStorage。
