'use strict';

// 1. Class(ES6)
// class : template => object : instance of class

// 2. class declaration
class Person{
    // constructor : 생성자
    constructor(name, age){
    // fields
        this.name = name;
        this.age = age;
    }
    // methods
    speak(){
        console.log(`${this.name}, hello!`);
    }
}
const ellie = new Person('ellie', 20);
ellie.speak();

// 2. getter and setter
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get age() {
        return this._age;
    }
    set age(value){
        this._age = value < 0? 0 : value;
    }
}

// class client{
//     constructor(name, gender=unknown, age){
//         this.name = name;
//         this.gender = gender;
//         this.age = age;
//     }
//     hope(){
//         console.log(this.name);
//     }
//     get age(){
//         return this._age;
//     }
//     set age(value){
//         this._age = value > 0? value : 'unknown';
//     }
// }

// const sehoon = new client('sehoon',-1);

// console.log(sehoon.age);
// console.log(sehoon.age);
// sehoon.hope()


// 클래스에 값을 넣을 때, 나이가 -1이 되는 것은 말이 안된다. 
// 이런 문제를 해결하기 위한 것이 getter, setter
const user1 = new User('Steve', 'Job', 5);
console.log(user1.age);

// 3. Fields(public, private)
class Experiment{
//public
publicField = 2;
//private
//class 외부에서 private 값을 읽을 수도 변경할 수도 없다.
#privateField = 0;
}

// 4. static
// : field나 method가 오브젝트가 아니라 클래스 자체에 종속되는 것.
// 메모리의 사용을 줄일 수 있다!!!
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }
    static printPublisher(){
        console.log(Article.publisher);
    }
}
const article1 = new Article(1);
const article2 = new Article(2);

Article.printPublisher();

// 5. 상속과 다양성
// class '자식 클래스' extends '부모 클래스'
class Shape {
    constructor(width, height, color){
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw(){
        console.log(`drawing ${this.color} color!`);
    }
    getArea(){
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw(){
        super.draw();         // super을 통해 부모를 상속 받을 수 있다. 
        console.log('삼각형'); // 이것만 쓰면 부모의 draw()가 사라짐
    }
    getArea(){
        return this.width * this.height /2;
    }
}

const rectangle = new Rectangle(20,20,'red');
console.log(rectangle.getArea());
rectangle.draw();
const triangle = new Triangle(20,20,'blue');
console.log(triangle.getArea());
triangle.draw();


// 6. instance of
// class checking : 객체가 해당 클래스에 포함되는 것인지 확인
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object);