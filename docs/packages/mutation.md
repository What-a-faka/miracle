# @what-a-faka/mutation
对象字段转化器，用于剔除字段、转化字段、改变键名、合并键值。

## 初始化
首先，安装依赖：
```
$ npm install @what-a-faka/mutation
```

然后在项目中导入：
```
import Mutation from '@what-a-faka/mutation'
```

## 构造
### new Mutation(schema, options)
- 参数：
  - {string} schema，表配置项，以下会详细说明
  - {string} options.clean，过滤掉Falsy的key，默认为true
  - {string} options.cleanValue, 过滤掉与cleanValue全等的key，默认会过滤掉所有Falsy

#### options
为了使用Mutation，需要使用new来构造一个程序，先不看schema，我们来使用一下过滤功能：
```
const data = {
  test1: '',
  test2: 0,
  test3: false,
}
const mutation = new Mutation({})
const result = mutation.parse(data)
console.log(result) // {}
```

若是要过滤掉指定的值，可以传递cleanValue：
```
const data = {
  test1: '',
  test2: 0,
  test3: false,
}
const mutation = new Mutation({}, { cleanValue: '' })
const result = mutation.parse(data)
console.log(result) // {test2: 0, test3: false}
```

不使用过滤功能，只需要将options.clean设为false即可。

#### schema
schema主要功能为定义对象的数据转化规则，支持`mutate`、`format`、`create`，以下为一个完整示例：
```
const data = {
  test1: 1,
  test2: 2,
  test3: ''
}

const mutation = new Mutation({
  test1: {
    mutate: {
      test1_mutate: value => `${value}_mutate`,
    }
  },
  test2: {
    format: value => 222
  },
  test1addtest2: {
    create(raw){
      return raw.test1 + raw.test2
    }
  }
})
const result = mutation.format()
console.log(result)

/*
{
  test1_mutate: "1_mutate",
  test2: 222,
  test1addtest2: 3,
}
*/

```
