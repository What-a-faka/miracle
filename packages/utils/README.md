# @what-a-faka/utils

## 安装
```
$ npm i @what-a-faka/utils
```

## mosaicFormat
前端掩码处理。

### 引用
```
import { mosaicFormat } from '@what-a-faka/utils'
```

### mosaicPhone(phone)
模糊打码手机号的中间四位。

- 参数：
  - {string} phone

### mosaicEmail(email)
- 参数：
  - {string} email

模糊邮件

### mosaicIdNumber(idNumber)
模糊身份证号，展示身份证好前 6 位和后 4 位，中间位数使用 '*' 号替代。

- 参数：
  - {string} email


### mosaicName(name)
模糊名字，只保留姓。

- 参数：
  - {string} name


## dateFormat

### 引用
```
import { dateFormat } from '@what-a-faka/utils'
```

### format(time, pattern)
时间格式化，内部使用：`date-fns/format`实现。
- 参数：
  - {date|string|number} time
  - {string} pattern, 默认值：'YYYY-MM-DD HH:mm:ss'
- 示例：
  ```
  // Input
  let result = dateFormat.format(new Date())

  // Output
  2018-12-13 15:54:36
  ```

### rangeFormat(dateRange, pattern)
开始/结束时间数字字符串格式化，内部使用：`date-fns/format`实现，开始时间与结束时间不能为空。
- 参数：
  - {[startTime: date, endTime: date]} dateRange
  - {string} pattern, 默认值：'YYYY-MM-DD HH:mm:ss'
- 示例：
  ```
  // Input
  let result = dateFormat.rangeFormat([new Date(), new Date())

  // Output
  [ '2018-12-13 16:02:44', '2018-12-13 16:02:44' ]
  ```

### getDayRangeFormat(timestamp, pattern)
开始/结束时间数字字符串格式化，内部使用：`date-fns/format`实现，开始时间与结束时间不能为空。
- 参数：
  - {number} timestamp
  - {string} pattern, 默认值：'YYYY-MM-DD HH:mm:ss'
- 示例：
  ```
  // Input
  let result = dateFormat.getDayRangeFormat([new Date(), new Date())

  // Output
  [ '2018-12-13 00:00:00', '2018-12-13 23:59:59' ]
  ```

## htmlForamt
HTML格式化。

### 引用
```
import { htmlFormat } from '@what-a-faka/utils'
```

### removeHtml(html)
清除html中的标签。

- 参数：
  - {string} html
- 示例：
  ```
  // Input
  let result = htmlFormat.removeHtml('<p>Lorem <span>content</span></p>')

  // Output
  Lorem content
  ```

## zodiacFormat
生肖格式化。

### 引用
```
import { zodiacFormat } from '@what-a-faka/utils'
```

- 参数：
  - {string} idCard
- 示例：
  ```
  // Input
  let result = zodiacFormat('510302199400000000')

  // Output
  // 狗
  ```

## regExp
常用语表达的正则校验。

### 引用
```
import { regExp } from '@what-a-faka/utils'
```

### 常用正则
- Email: 邮箱
- Landline: 座机号
- Creditcode: 企业信用代码
- IDCard: 身份证号
- ValidCode: 4位数验证码
- Phone: 手机
- Website: 网址

### 工具方法
#### regExp.genValidator(regType, message)
生成Element-ui的Form Validator，regType名称见上表，message即报错信息。
#### regExp.regCheck(reg, value)
校验正则与值是否匹配。

