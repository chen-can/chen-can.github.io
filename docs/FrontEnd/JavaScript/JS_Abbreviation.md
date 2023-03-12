# 代码简写技巧

## 1. 当同时声明多个变量时，可简写成一行

```javascript
//常规
let x;
let y = 20;

//简写
let x, y = 20;
```

## 2. 使用三元(三目)运算符简化if else

```javascript
//常规 
const x = 20;
let answer;

if (x > 10) {
    answer = "大于 10";
} else {
    answer = "小于 10";
}

//简写 
const answer = x > 10 ? "大于 10" : "小于 10";

// 嵌套版
const answer = x > 10 ? "大于10" : x < 5 ? "小于5" : "在5和10之间";
```

## 3. 使用||运算符给变量指定默认值

 `本质是利用了||运算符的特点，表达式会依次进行布尔判定返回能确定结果的最后一个数据`

```javascript
//常规
let imagePath;

if (path !== null && path !== undefined && path !== '') {
    imagePath = getImagePath();
} else {
    imagePath = 'default.jpg';
}

//简写
let imagePath = getImagePath() || 'default.jpg';
```

## 4. 使用&&运算符简化if语句

 `本质是利用了&&运算符的特点，表达式会依次进行布尔判定返回能确定结果的最后一个数据`

```javascript
//常规
if (isLoggedin) {
    goToHomepage();
}

//简写
isLoggedin && goToHomepage();
```

## 5. 利用解构，可为多个变量同时赋值

```javascript
//常规
let a, b, c;

a = 5;
b = 8;
c = 12;

//简写
let [a, b, c] = [5, 8, 12];
```

## 6. 使用解构交换两个变量的值

```javascript
let x = 'Hello',
    y = 55;

//常规
const temp = x;
x = y;
y = temp;

//简写
[x, y] = [y, x];
```

## 7. 适用箭头函数简化函数

```javascript
//常规
function add(num1, num2) {
    return num1 + num2;
}

//简写
const add = (num1, num2) => num1 + num2;
```

> 需要注意箭头函数和普通函数的区别

## 8. 使用字符串模板简化代码

 `使用模板字符串代替原始的字符串拼接`

```javascript
//常规
console.log('You got a missed call from ' + number + ' at ' + time);

//简写
console.log(`You got a missed call from ${number} at ${time}`);
```

 `多行字符串也可使用字符串模板简化`

```javascript
//常规
console.log('JavaScript, often abbreviated as JS, is a\n' +
    'programming language that conforms to the \n' +
    'ECMAScript specification. JavaScript is high-level,\n' +
    'often just-in-time compiled, and multi-paradigm.'
);

//简写
console.log(`JavaScript, often abbreviated as JS, is a
            programming language that conforms to the
            ECMAScript specification. JavaScript is high-level,
            often just-in-time compiled, and multi-paradigm.`);
```

## 9. 对于多值匹配，可将所有值放在数组中，通过数组方法来简写

```javascript
//常规
if (value === 1 || value === 'one' || value === 2 || value === 'two') {
    // Execute some code
}

// 简写 1
if ([1, 'one', 2, 'two'].indexOf(value) >= 0) {
    // Execute some code
}

// 简写 2
if ([1, 'one', 2, 'two'].includes(value)) {
    // Execute some code 
}
```

## 10. 巧用ES6对象字面量语法

```javascript
let firstname = 'Amitav';
let lastname = 'Mishra';

//常规
let obj = {
    firstname: firstname,
    lastname: lastname
};

//简写
let obj = {
    firstname,
    lastname
};
```

## 11. 使用一元运算符简化字符串转数字

```javascript
//常规
let total = parseInt('453');
let average = parseFloat('42.6');

//简写
let total = +'453';
let average = +'42.6';
```

## 12. 使用repeat()方法简化重复一个字符串

```javascript
//常规
let str = '';
for (let i = 0; i < 5; i++) {
    str += 'Hello ';
}
console.log(str); // Hello Hello Hello Hello Hello

// 简写
'Hello '.repeat(5);

// 想跟你说100声抱歉！
'sorry\n'.repeat(100);
```

## 13. 使用双星号代替Math.pow()

```javascript
//常规
const power = Math.pow(4, 3); // 64

// 简写
const power = 4 ** 3; // 64
```

## 14. 巧用扩展操作符（...）简化代码

 `简化数组合并`

```javascript
let arr1 = [20, 30];

//常规
let arr2 = arr1.concat([60, 80]); // [20, 30, 60, 80]

//简写
let arr2 = [...arr1, 60, 80]; // [20, 30, 60, 80]
```

 `单层对象的拷贝`

```javascript
let obj = {
    x: 20,
    y: {
        z: 30
    }
};

//常规
const makeDeepClone = (obj) => {
    let newObject = {};
    Object.keys(obj).map(key => {

        if (typeof obj[key] === 'object') {
            newObject[key] = makeDeepClone(obj[key]);
        } else {
            newObject[key] = obj[key];
        }

    });

    return newObject;
}

const cloneObj = makeDeepClone(obj);

//简写
const cloneObj = JSON.parse(JSON.stringify(obj));

//简写 for single level object
let obj = {
    x: 20,
    y: 'hello'
};
const cloneObj = {
    ...obj
};
```

## 15. if 语句

```javascript
//常规
if (likeJavaScript === true) {
    // Execute some code
}

// 简写
if (likeJavaScript) {
    // Execute some code
}
```

## 16. 寻找数组中的最大和最小值

```javascript
// 简写
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2
```

## 17. 使用for in和for of来简化普通for循环

```javascript
let arr = [10, 20, 30, 40];

//常规
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//简写
//for of loop
for (const val of arr) {
    console.log(val);
}

//for in loop
for (const index in arr) {
    console.log(arr[index]);
}
```

## 18. 简化获取字符串中的某个字符

```javascript
let str = 'jscurious.com';

//常规
str.charAt(2); // c

//简写
str[2]; // c
```

## 19. 移除对象属性

```javascript
let obj = {
    x: 45,
    y: 72,
    z: 68,
    p: 98
};

// 常规
delete obj.x;
delete obj.p;
console.log(obj); // {y: 72, z: 68}

// 简写
let {
    x,
    p,
    ...newObj
} = obj;
console.log(newObj); // {y: 72, z: 68}
```

## 20. 使用arr.filter(Boolean)过滤掉数组成员的值falsey

```javascript
let arr = [12, null, 0, 'xyz', null, -25, NaN, '', undefined, 0.5, false];

//常规
let filterArray = arr.filter(function(value) {

    if (value) return value;

});
// filterArray = [12, "xyz", -25, 0.5]

// 简写
let filterArray = arr.filter(Boolean);
// filterArray = [12, "xyz", -25, 0.5]
```

## 21. switch 简写

```javascript
//常规
switch (a) {
    case '张三':
        return 'age是12'
    case '李四':
        return 'age是120'
}

// 简写
const map = {
    '张三': 'age12',
    '李四': 'age120',
}
console.log(map['张三'])
```

## 22. 对象嵌套属性解构

```javascript
//常规
const {
    info
} = {
    name: '张三',
    age: 13,
    info: {
        dec: '描述1',
        info: '信息'
    }
}
console.log(info.dec) // 描述1

// 简写
const {
    info: {
        dec
    }
} = {
    name: '张三',
    age: 13,
    info: {
        dec: '描述1',
        info: '信息'
    }
}
console.log(dec) // 描述1
```