/**
 * 接口（1）=> 对象类型接口
 * https://time.geekbang.org/course/detail/100032201-108568
 * 约束对象、函数以及类的结构和类型，这是一种代码协作的契约，我们必须遵守，而且不能改变。
 */

interface List {
  readonly id: number
  name: string
  age?: number
  // [x: string]: any // 字符串索引签名
}
interface Result {
  data: List[]
}

function render(res: Result) {
  res.data.forEach(value => {
    // console.log(value.id, value.name)
  })
}

// ts 鸭式辨型法：只要传入的对象满足接口的必要条件，那么它就被允许，即使传入多余字段也可以通过类型检查。（动态语言类型风格）
// 1）把对象自变量赋值给一个对象
let result = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
}

/**
 * render(result)
 * 如果直接传入对象自变量，ts就会进行类型检查
 *
 * 绕过这种检查的方法：
 * （1）把对象自变量赋值给一个对象
 * （2）使用类型断言
 */

render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)

//（1）把对象自变量赋值给一个对象
let result1 = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
}

render(result1)

//（2）类型断言（我们要明确的告诉编译器 我们知道这个对象的类型是Result，这样编译器就会绕过类型检查）
// ① 和 ② 是等价的
// 建议使用第 ① 种方法，因为第 ② 种会在react中产生歧义

// ①
render({
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
} as Result)
// ②
render(<Result>{
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B' }
  ]
})

//（3）字符串索引签名（用任意的字符串索引List可以得到任意的结果，这样List就支持多个属性了）

// interface List {
//   id: number
//   name: string
//   [x: string]: any // 字符串索引签名
// }

function render2(res: Result) {
  res.data.forEach(value => {
    // console.log(value.id, value.name)
    if (value.age) {
      console.log(value.age)
    }
  })
}

let result2 = {
  data: [
    { id: 1, name: 'A', sex: 'male' },
    { id: 2, name: 'B', age: 10 }
  ]
}
render2(result2)

// 用数字索引接口
interface StringArray {
  [index: number]: string // 用任意的数字去索引StringArray都会得到一个string（相当于生成了一个字符串类型的数组）
}

let chars: StringArray = ['A', 'B']
console.log('🚀 ~ file: interface.ts ~ line 107 ~ chars', chars)

// 用字符串索引接口
// 不能申明number类型的成员
// 两种索引签名是可以混用的
// 数字索引签名的返回值一定要是字符串索引签名返回值的子类型
interface Names {
  [x: string]: any
  // y: number
  [z: number]: string
}
