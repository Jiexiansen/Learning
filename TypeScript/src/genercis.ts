/*
 * @Author: Rudy
 * @Date: 2021-01-15 18:17:19
 * @LastEditTime: 2021-01-19 15:48:48
 * @LastEditors: Rudy
 * @FilePath: /TypeScript/src/genercis.ts
 */

// 函数重载
// function log(value: string): string
// function log(value: string[]): string[]
// function log (value: any): {
//   console.log(value)
//   return value
// }

// 联合类型
// function log(value: string | string[]): string | string[] {
//   console.log(value)
//   return value
// }

// any 类型
// 可以满足所有需求，但是丢失了类型之间的约束关系（忽略了输入参数的类型和函数返回值类型）
// function log(value: any) {
//   console.log(value)
//   return value
// }

// ## 泛型
// 不预先确定的数据类型，具体的类型在使用的时候才能确定。
// 一般的、广泛的、不需要预先定义的数据类型
// 保证了输入参数和返回值的一致性
function log<T>(value: T): T {
  console.log(value)
  return value
}

log<string[]>(['a', 'b'])
log(['a', 'b'])

// 泛型函数类型
// type Log = <T>(value: T) => T
// let myLog: Log = log

// 接口函数类型
//    泛型仅约束了一个函数
// interface Log {
//   <T>(value: T): T
// }

// 泛型约束整个接口
// interface Log<T> {
//   (value: T): T
// }
// let myLog: Log<number> = log

// 泛型约束整个接口-默认类型
// interface Log<T = string> {
//   (value: T): T
// }

// let myLog: Log = log

// myLog('1')

// *** 高级类型中有广泛应用 ***
