# 前端代码规范
### 前端框架
业务项目推荐使用Vue v2.5.16，请在开始编码时仔细阅读[风格指南](https://cn.vuejs.org/v2/style-guide/)，脚手架生成工具请使用[Vue CLI 3](https://cli.vuejs.org/)。

对于**官网项目**，重SEO的项目请使用：[Nuxt框架](https://nuxtjs.org/)，对自己技术有信心的同学请使用[Vue SSR服务](https://ssr.vuejs.org/zh/)，除此之外的项目可以考虑使用普通SPA + [Prerender.IO](http://prerender.io)提供的服务进行优化。

对于**活动页面/H5**，使用快速、保质保量的框架即可。

### EditorConfig
[EditorConfig](https://editorconfig.org/)用于统一不同编辑器之间的代码风格，前端工程需在根目录下创建一个`.editorconfig`文件，配置如下：
```
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
end_of_line = lf
insert_final_newline = true
trim_trailing_whitespace = true
```

### browserslist
用于规范项目支持的浏览器范围，babel、autoprefix等插件会依赖此配置，因此在这里统一进行设置：
```
> 1%
last 2 versions
not ie <= 8
```

以下为配置说明：
- 全球使用率大于1%的浏览器版本
- 每个浏览器最近的2个版本
- 排除掉ie8及其以下的版本

### ECMAScript规范
目前为止项目都使用的是Babel7，Presets为：`@babel/preset-env`，它包含了`es2015 ~ es2017`的所有规范，因此若非业务所需，暂时不用引入其他规范。

### 代码风格
请遵循[airbnb风格指南](https://github.com/airbnb/javascript)。

不推荐使用空格，若工程没有配置，可在ESLint里添加：
```
rules: {
  'semi': [2, "never"]
}
```

### ESLint
规范父集请使用：`extends: ["plugin:vue/essential", "@vue/airbnb"]`，请尽量遵循默认规范，手动取消的原则为：
- 注释掉单行：`// eslint-disable-nextd-line`
- 注释掉文件内指定规则：`/* eslint-disable no-param-reassign */`
- 注释掉部分模块：`/* eslint-disable */`，请一定要记得关闭：`/* eslint-enable */`，不推荐使用

### Prettier
若需要格式化代码的地方，请使用Prettier插件，能极大的提高编码效率，目前项目间的.prettierrc为：
```
{
  "printWidth": 100,
  "semi": false,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "arrowParens": "always"
}
```

##### 关闭ESLint语法格式化规则
有时候使用Prettier格式化时会触发ESLint报错规则，这时请手动进行配置一下，或是进行以下操作：
```
yarn add --dev eslint-config-prettier
```

然后在eslintrc.json中配置：
```
{
  "extends": ["prettier"]
}
```

