# @what-a-faka/obj-mutation
对象字段转化器，用于剔除字段、转化字段、改变键名、合并键值。

## 初始化
首先，安装依赖：
```
$ npm install @what-a-faka/obj-mutation
```

然后在项目中导入：
```
import ObjMutation from '@what-a-faka/obj-mutation'
```

接着通过传入字段信息(SCHEMA)与初始化选项(OPTIONS)即可初始化一个对象：
```
const mutator = new ObjMutation(SCHEMA, OPTIONS)
```

此时即可通过`parse`方法获取转化结果：
```
mutator.parse(DATA)
```

## 字段信息
schema主要功能为定义对象的字段转化规则，支持`mutate`、`format`、`create`，首先我们初始化一个带转化对象：
```
const data = {
  test1: 1,
  test2: 2,
  test3: ''
}
```
### mutate
```
const mutator = new ObjMutation({
  test1: {
    mutate: {
      test1_mutate: value => `${value}_mutate`,
    }
  }
})

const result = mutator.parse(data)
```
最终得到的结果为：
```
{
  test1_mutate: "1_mutate",
  test2: 2,
}
```

### create
```
const mutator = new ObjMutation({
  test4: {
    create(araw) {
      return raw.test1 + raw.test2
    }
  }
})

const result = mutator.parse(data)
```
最终得到的结果为：
```
{
  test1: 1,
  test2: 2,
  test4: 3
}
```

### format
```
const mutator = new ObjMutation({
  test2: {
    format: value => 222
  },
})

const result = mutator.parse(data)
```

最终得到的结果为：

```
{
  test1: 1,
  test2: 222,
}
```

## 选项
- 参数：
  - {string} schema，表配置项，以下会详细说明
  - {string} options.clean，过滤掉Falsy的key，默认为true
  - {string} options.cleanValue, 过滤掉与cleanValue全等的key，默认会过滤掉所有Falsy

由上可知，默认会过滤掉一切Falsy值：
```
const data = {
  test1: '',
  test2: 0,
  test3: false,
}
const mutator = new ObjMutation({})
const result = mutator.parse(data)
console.log(result) // {}
```

若是要过滤掉指定的值，可以传递cleanValue任意值：
```
const data = {
  test1: '',
  test2: 0,
  test3: false,
}
const mutator = new ObjMutation({}, { cleanValue: '' })
const result = mutator.parse(data)
console.log(result) // {test2: 0, test3: false}
```

如果不使用过滤功能，只需要将options.clean设为false即可。
