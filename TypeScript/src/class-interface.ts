/*
 * @Author: Rudy
 * @Date: 2021-01-15 15:35:33
 * @LastEditTime: 2021-01-15 18:17:39
 * @LastEditors: Rudy
 * @FilePath: /TypeScript/src/class-interface.ts
 */

interface Human {
  name: string
  eat(): void
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {}
}

// 类实现接口的时候，必须实现接口中声明的所有属性
// 类只能约束接口的公有成员
// 接口也不能约束类的构造函数
// 接口只能约束类的公有成员

interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

interface Boy extends Man, Child {}

let boy: Boy = {
  name: '',
  run() {},
  eat() {},
  cry() {}
}

// 接口继承类

class Auto {
  state = 1
  // private state2 = 0
}

interface AutoInterface extends Auto {}

class C implements AutoInterface {
  state = 1
}

class Bus extends Auto implements AutoInterface {}
