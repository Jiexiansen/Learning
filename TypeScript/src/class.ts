/*
 * @Author: your name
 * @Date: 2020-12-08 11:51:55
 * @LastEditTime: 2021-01-15 15:11:12
 * @LastEditors: Rudy
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/src/class.ts
 */

class Dog1 {
  constructor(name: string) {
    this.name = name
  }
  public name: string // 公有化
  run() {}
  private pri() {} // 私有化
  protected pro() {} // 受保护
  readonly legs: number = 4 // 只读属性（必须要被初始化）
  static food: string = 'bones' // 类的静态成员
}
console.log('Dog1', Dog1.prototype)
const dog1 = new Dog1('wangwang')
console.log('dog1', dog1)
// dog.pri()
// dog.pro()
console.log('Dog.food', Dog1.food)

// Tips:
// 1. 无论在js还是ts中，类成员的属性都是实例属性，而不是原型属性，而类成员的方法都是实例方法
// 2. 与js不同的是实例的属性必须要有初始值，或者在构造函数中被初始化

// 继承
class Husky1 extends Dog1 {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
    // this.pri()
    this.pro()
  }
}

// 除了类的成员可以添加修饰符外，构造函数的参数也可以添加修饰符，它的作用是将参数自动变成了实例的属性，这样可以省略类的定义
// 类的静态成员只能通过类名来调用，不能通过子类来调用

console.log('Husky1.food', Husky1.food)
