// Object
// One of the JavaScript's data types.
// a collection of related data and/ or functionality
// Nearly all objects in JavaScript are instances of Object
// Object = {key : value};

// 1. literals and properties
const obj1 = {}; // 'object literal' syntax
const obj2 = new Object(); // 'object constructor' syntax

// 객체는 동적이다. 그래서 앞에서 정의를 해도 뒤에서 추가, 삭제 가능.
sehoon = {name : 'sehoon', age : 27};
//추가
sehoon.hasjob = 'Not yet';
//삭제
delete sehoon.age;
console.log(sehoon);


// 2. Computed properties
// key는 항상 string!!!!!!!!!!
console.log(sehoon.name);
console.log(sehoon['name']); // <<<<<
sehoon['name'] = 'hanna';    // 바꿀 수도 있다.
console.log(sehoon['name']);

// 언제 dot을 쓰고 언제 배열형태로 해야함?
// >>> 거의 대부분 코딩할 때는 dot을 쓰고, 
// 배열형태는....
function printValue(obj, key){
    console.log(obj.key);
    console.log(obj[key]); // value를 모르고, object와 key 값만 알 때 쓸 수 있다.
}
printValue(sehoon, 'name');


// 3. Property value shorthand
const person1 = {name : 'hanna', age : 24};
const person2 = {name : 'hyunna', age : 27};
const person3 = {name : 'himchan', age : 27};
// 이렇게 하나씩 하기 너무 힘들어서
// constructor Function 
function Person(name, age){
    this.name = name;
    this.age = age;
}
const person4 = new Person('sehoon', 27);
console.log(person4);

// 4. in operator
// 해당 오브젝트에 key가 있는 지 없는 지 확인
console.log('name'in person4);
console.log('gender' in person3);

// 5. for ... in vs for ... of
console.clear();
for(key in sehoon){
    console.log(key);
}

// for ... of
const array = [0,1,2,5,4];
for(value of array){
    console.log(value);
}


// 6. cloning(Object.assign)
// Object.assign(dest, [obj1, obj2, obj3])
// 동일한 reference를 복사 즉, 메모리가 그만큼 더 차지하게 됨
const user = {name : 'ellie', age : 20};
const user2 = user;
user2.name = 'coder';
console.log(user);
// user와 user2의 각 메모리 공간이 같은 값을 참조하고 있기 때문에 user2가 바뀌면 user도 바뀜

// 복사하기 위해서는?
const user4 = Object.assign({}, user);
//or
//const user4 = {};
//Object.assign(user4, user);
console.log(user4);

// another example
const fruit1 = {color : 'red'};
const fruit2 = {color : 'blue', size : 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed);