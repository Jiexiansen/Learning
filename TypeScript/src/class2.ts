/*
 * @Author: Rudy
 * @Date: 2020-12-08 11:51:55
 * @LastEditTime: 2021-01-15 15:34:56
 * @LastEditors: Rudy
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/src/class2.ts
 */

// ### 抽象类
// 只能被继承不能被实例化的类
// 抽象类的好处：可以抽离出一些事物的共性，这样有利于代码的复用和扩展
abstract class Animal {
  eat() {
    console.log('eat')
  }
  abstract sleep(): void
}

// let animal = new Animal(); // 无法实例化

class Dog extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() {}
  sleep() {
    console.log('dog sleep')
  }
}

let dog = new Dog('wangwang')
console.log('dog', dog)
dog.eat()

// 抽象类 => 多态
// 所谓多态就是在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现,在程序运行的时候会根据不同的对象执行不同的操作，这样就实现了运行时的绑定

class Cat extends Animal {
  sleep() {
    console.log('Cat sleep')
  }
}

const cat = new Cat()

const animales: Animal[] = [dog, cat]
animales.forEach(i => {
  i.sleep()
})

class WorkFlow {
  step1() {
    console.log('step1', this)

    return this
  }
  step2() {
    console.log('step2', this)
    return this
  }
}

new WorkFlow().step1().step2()

class Myflow extends WorkFlow {
  next() {
    console.log('next', this)
    return this
  }
}

new Myflow().next().step1().step2()
