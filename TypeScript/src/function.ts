// 函数定义
function add11(x: number, y: number) {
  return x + y
}
let add2: (x: number, y: number) => number
type add3 = (x: number, y: number) => number
interface add4 {
  (x: number, y: number): number
}

add11(1, 2)

/**
 * 1.必选参数不可位于可选参数之后
 * z: number
 * Default parameters should be last.sonarlint(typescript:S1788)
 * 2.必选参数前不可输入默认参数
 * 3.必选参数之前默认参数不可以省略
 */
function add5(x: number, y?: number) {
  return y ? x + y : x
}

add5(1)

function add6(x: number, z: number, y = 1, q = 1) {
  return x + y + z + q
}

console.log(add6(1, 2))

function add7(x: number, ...rest: number[]) {
  console.log('x', x)
  console.log('rest', rest)

  return x + rest.reduce((pre, cur) => pre + cur)
}

console.log(add7(1, 2, 3, 4, 5))

/**
 * 函数重载
 *
 * - 在静态类型语言中比如C++、Java中函数重载
 * 含义：两个函数如果名称相同，但是参数个数或是参数类型不同那么就实现了一个函数重载
 * 好处：不需要为了相似功能的函数选用不同的函数名称，这样增强了函数的可读性
 *
 * - 在TS中行数重载的定义有些不同：函数支持多个参数，如果参数都是数字，则返回所有参数的和，如果都是字符串，则返回所有字符串的拼接，
 * TS的函数重载要求我们先定义一系列的名称相同的函数声明
 */

function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((pre, cur) => pre + cur)
  }
}

console.log('add8-number', add8(1, 2, 3))
console.log('add8-string', add8('a', 'b', 'c'))
