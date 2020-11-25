/**
 * 数字枚举（枚举实现原理：反向映射）
 * 思维方法：将程序中不容易记忆的硬编码，或者是在未来可能会改变的常量，抽取出来定义成枚举类型。这样可以提高程序的可读性和可维护性，枚举类型可以使你的程序以不变应万变。
 */
enum Role {
  Reporter = 1,
  Developer,
  Maintainer,
  Owner,
  Guest
}
// https://www.typescriptlang.org/zh/play?#code/KYOwrgtgBASg9gG2FA3gKCrYAHOAnAF2DygF4oBGAGgygBFgA3YBObYmzAWQEMBLEAX4gOtAPIB3EXk5QA4mGABnAmgC+QA
console.log('🚀 ~ file: enum.ts ~ line 3 ~ Role', Role.Reporter)
console.log('🚀 ~ file: enum.ts ~ line 3 ~ Role', Role)

/**
 * 字符串枚举（不可以反向映射）
 */
enum Message {
  Success = '恭喜你，成功了',
  Fail = '抱歉，失败了'
}
/**
 * 异构枚举（容易混淆，不建议使用）
 */
enum Answer {
  N,
  Y = 'Yes'
}
/**
 * 枚举成员
 * 分类：常量枚举、
 *    - 常量枚举成员：会在编译的时候计算出结果，然后以常量的形式出现在运行时环境
 *    - 需要被计算的枚举成员，非常量的表达式，不会在编译阶段进行计算，而会被保留到程序的执行阶段
 *
 */
// Role.Reporter = 2 // 枚举成员-只读类型
enum Char {
  // 1. const member
  a, //（1）没有初始值的情况
  b = Char.a, //（2）对已有枚举成员的引用
  c = 1 + 3, //（3）常量表达式
  // 2. computed member
  d = Math.random(),
  e = '123'.length,
  // computed member后面一定要赋一个初始值
  // enum member must have initializer
  f = 3
}

//

/**
 * 常量枚举
 * - 用const声名的枚举是常量枚举，
 * - 特性：在编译阶段会被移除
 * - 作用：不需要一个对象，而需要对象的值的时候，可以使用常量枚举，这样会减少在编译环境的代码
 */
const enum Month {
  Jan,
  Feb,
  Mar
}

let month = [Month.Jan, Month.Feb, Month.Mar]

/**
 * 枚举类型
 * 枚举和枚举成员都可以作为一种单独的类型存在
 * eq: (1)枚举成员没有初始值;(2)所有成员都是数字枚举;(3)所有成员都是字符串枚举
 */

enum E {
  a,
  b
}
enum F {
  a = 0,
  b = 1
}
enum G {
  a = 'apple',
  b = 'banana'
}
console.log('🚀 ~ file: enum.ts ~ line 74 ~ E', E['a'])

let e0: E = 3
let f0: F = 3

// 可以把任意的number类型赋值给枚举类型，它的取值也可以超出枚举成员的定义
// 两种不同类型的枚举是不能进行比较的，如有比较则始终返回false
// 错误示例： e2 === f2

// 定义了三种枚举成员类型
let e1: E.a
let e2: E.b
let e3: E.a

if (e1 === e3) {
  console.log(123)
}

// 字符串枚举只能是枚举成员的类型
let g1: G = G.b
let g2: G.a = G.a
