# 数组方法
## indexOf
**用途：** 用于查找数组中是否存在某个值，如果存在则返回某个值的下标，否则返回`-1`
```javascript
let list = [1, 2, 3];
console.log(list.indexOf(2)) // 1
console.log(list.indexOf("蛙人")) // -1
```
## map
**用途：** `map`是一个数组函数方法，接收三个参数，`value`，`index`，`self`，返回值是处理完的结果。
```javascript
let list = [1, 2, 3];
const res = list.map((value, index, self) => {
   console.log(value) // 1 2 3
   console.log(index) // 0 1 2
   console.log(self) // [1, 2, 3]
   return value * 2
})
console.log(res) // [2, 4, 6]
console.log(list) // [1, 2, 3]
```
## forEach
**用途：** 用于遍历一个数组，接收三个参数，`value`，`index`，`self`，返回值为`undefined`，只读操作，要想改变值可以利用引用数据类型的缺陷，这里并不推荐，而且该函数速度慢
```javascript
let list = [1, 2, 3];
const res = list.forEach((value, index, self) => {
    console.log(value) // 1 2 3
    console.log(index) // 0 1 2
    console.log(self) // [1, 2, 3]
    return 123
})
console.log(res) // undefined
```
## splice
**用途：** 用于数组删除或替换内容，**改变原数组**，接收三个参数：

- 第一个参数是，删除或添加的位置
- 第二个参数是，要删除的几位，如果为0则不删除
- 第三个参数是，向数组添加内容
```javascript
let list = [1, 2, 3];
list.splice(0, 1) // 把第0个位置，给删除一位
console.log(list) // [2, 3]
list.splice(0, 1, "蛙人") // 把第0个位置，给删除一位，添加上一个字符串
console.log(list) // ["蛙人", 2, 3]
list.splice(0, 2, "蛙人") // 把第0个位置，给删除2位，添加上一个字符串
console.log(list) // ["蛙人", 3]
```
## slice
**用途：** 用于截取数组值，接收两个参数，第一个参数是要获取哪个值的下标，第二个参数是截取到哪个下标的前一位。
```javascript
let list = [1, 2, 3];
let res = list.slice(1, 3) // 从第一位下标开始截取，到第三位下标的前一位，所以截取出来就是 [2, 3]
console.log(res) // [2, 3]
console.log(list) // [1, 2, 3]
```
## filter
**用途：** 用于过滤数组内的符合条件的值，返回值为满足条件的数组对象。
```javascript
let list = [1, 2, 3];
let res = list.filter(item => item > 1);
console.log(res) // [2, 3]
console.log(list) // [1, 2, 3]
```
## every
**用途：** 用于检测数组所有元素是否都符合指定条件，返回值为`Boolean` , 该方法是数组中必须**全部**值元素满足条件返回`true`，否则`false`
```javascript
let list = [1, 2, 3];
let res = list.every(item => item > 0)
console.log(res) // true
let res1 = list.every(item => item > 1)
console.log(res1) // false
```
## some
**用途：** 用于检测数组中的元素是否满足指定条件，返回值为`Boolean`  , 该方法是只要数组中**有一项**满足条件就返回`true`，否则`false`
```javascript
let list = [1, 2, 3];
let res = list.some(item => item > 0)
console.log(res) // true
```
## reduce
**用途：** 该方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。该方法回调函数接收四个参数。

- 第一个参数：_初始值_, 或者计算结束后的返回值
- 第二个参数：当前元素
- 第二个参数：当前元素的索引
- 第四个参数：当前元素所属的数组对象，本身

我们一般只用前两个就行，`reduce`第一个参数回调函数，第二个参数是初始值
```javascript
let list = [1, 2, 3];
let res = list.reduce(( prev, cur ) => prev += cur, 0)
console.log(res) // 6
console.log(list) // [1, 2, 3]
```
## reverse
**用途：** 用于数组反转，**改变原数组**。
```javascript
let list = [1, 2, 3];
let res = list.reverse();
console.log(res) // [3, 2, 1]
console.log(list) // [3, 2, 1]
```
## join
**用途：** 用于数据以什么形式拼接,
```javascript
let list = [1, 2, 3];
let res = list.join("-");
console.log(res) // 1-2-3
console.log(list) // [1, 2, 3]
let sum = eval(list.join("+"))
console.log(sum) // 6
```
## sort
**用途：** 用于将数组排序，排序规则看返回值，**改变原数组**

- 返回值为正数,后面的数在前面
- 返回值为负数,前面的数不变,还在前面
- 返回值为0,都不动
```javascript
let list = [1, 2, 3];
let sort = list.sort((a, b) => b - a)
console.log(sort) // [3, 2, 1]
console.log(list) // [3, 2, 1]
```
## concat
**用途：** 用于合并数组原始
```javascript
let list = [1, 2, 3];
let res = list.concat([1, 2, 3])
console.log(res) // [1, 2, 3, 1, 2, 3]
console.log(list) //[1, 2, 3]
```
## push
**用途：** 向数组后面添加元素，返回值为数组的`length`，**改变原数组**
```javascript
let list = [1, 2, 3];
let res = list.push(1)
console.log(res) // 4
console.log(list) //[1, 2, 3, 1]
```
## pop
**用途：** 用于删除数组尾部的元素，返回值为删除的元素，**改变原数组**
```javascript
let list = [1, 2, 3];
let res = list.pop()
console.log(res) // 3
console.log(list) //[1, 2]
```
## shift
**用途：** 用于删除数组的头部，返回值为删除的元素，**改变原数组**
```javascript
let list = [1, 2, 3];
let res = list.shift()
console.log(res) // 1
console.log(list) //[2, 3]
```
## unshift
**用途：** 向数组的头部添加元素，返回值为数组的`length`，**改变原数组**
```javascript
let list = [1, 2, 3];
let res = list.unshift(1)
console.log(res) // 4
console.log(list) //[1, 1, 2, 3]
```
## toString
**用途：** 用于将数组内容转换为字符串
```javascript
let list = [1, 2, 3];
let res = list.toString()
console.log(res) // 1,2,3
console.log(list) //[1, 2, 3]
```
## Array.isArray
**用途：** 检测对象是不是一个数组
```javascript
let list = [1, 2, 3];
let res =  Array.isArray(list)
console.log(res) // true
```