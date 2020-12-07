/*
 * @Author: Rudy
 * @Date: 2020-11-25 17:58:33
 * @LastEditors: Rudy
 * @LastEditTime: 2020-11-25 18:17:01
 */

/**
 * 接口（2）=> 函数类型接口
 * https://time.geekbang.org/course/detail/100032201-108550
 * 、、约束对象、函数以及类的结构和类型，这是一种代码协作的契约，我们必须遵守，而且不能改变。
 */
// 定义对象
// let add: (x: number, y: number) => number

// 定义函数
// interface Add {
//   (x: number, y: number): number
// }
// 类型别名 Add
type Add = (x: number, y: number) => number

let add: Add = (a, b) => a + b

/**
 * 混合类型接口：一个接口既可以定义一个函数，也可以像对象一样拥有属性和方法
 */

// 用混合接口定义一个类库
interface Lib {
  (): void
  version: string
  doSomething(): void
}

function getLib() {
  let lib: Lib = (() => {}) as Lib

  lib.version = '1.0'
  lib.doSomething = () => {}
  return lib
}

let lib1 = getLib()
lib1()
lib1.doSomething()

let lib2 = getLib()
