// 原始类型
let bool: boolean = true
let num: number = 0
let str: string = 'abc'

// str = 123 // 变量的数据类型是不可以改变的
// 数组
let arr1: number[] = [1, 2, 3]
let arr2: Array<number> = [1, 2, 3]
let arr3: Array<number | string> = [1, 2, 3, '4'] // 联合类型
// Array => 泛型接口 ？

// 元组
let tuple: [number, string] = [0, '1']
// tuple.push(2)
// console.log('🚀 ~ file: datatype.ts ~ line 16 ~ tuple', tuple)

// 函数
// let add = (x: number, y: number): number => x + y
let add1 = (x1: number, y: number) => x1 + y
let compute: (x: number, y: number) => number
compute = (a, b) => a + b

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 }
obj.x = 3

// symbol 具有唯一的值
let s1: symbol = Symbol()
let s2 = Symbol()
// console.log('🚀 ~ file: datatype.ts ~ line 32 ~ s1 === s2', s1 === s2) // false

// undefined，null 是任何类型中的子类型
let un: undefined = undefined
let nu: null = null

// num = undefined
// num = null

// void 没有任何返回值的类型
let noReturn = () => {}

// any 默认值随意赋值类型
let x

// never 永远不会有返回值的类型
// 抛出异常
let error = () => {
  throw new Error('error')
}
// 死循环函数
let endless = () => {
  while (true) {
    console.log(1)
  }
}
