/**
 * @Author: Rudy
 * @Date: 2021-01-19 15:49:17
 * @LastEditTime: 2021-01-19 16:13:15
 * @LastEditors: Rudy
 * @FilePath: /TypeScript/src/genercis2.ts
 *
 * # Title: 泛型（2）: 泛型类与泛型约束
 *
 * - 泛型也可以约束类的成员
 *
 * ## 泛型的好处：
 * 1. 函数和类可以轻松的支持多种类型，增强程序的扩展性
 * 2. 不必写多条函数重载，冗长的联合联合类型声明，增强代码可读性
 * 3. 灵活控制类型之间的约束
 *
 * ## 注意：
 * - 泛型不能应用于类的静态成员 static xxx
 */

//

class Log<T> {
  // static aaa: T
  run(value: T) {
    console.log(value)
    return value
  }
}

let log1 = new Log<number>()
log1.run(1)

let log2 = new Log()
log2.run('1')
log2.run(1)
log2.run({ a: 1 })

// 泛型约束
interface Length {
  length: number
}

function log22<T extends Length>(value: T): T {
  console.log(value, value.length)
  return value
}

log22([1])
log22('123')
log22({ length: 1 })
