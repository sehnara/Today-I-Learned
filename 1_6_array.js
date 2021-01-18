'use strict';

// Array

// 1. Declaration
const arr1 = new Array();
const arr2 = [1,2];

// 2. Index position
const fruits = ['Apple', 'Banana'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]); // 배열의 마지막 값을 불러오기 

// 3. looping over
console.clear();

for(let element of fruits){
    console.log(element);
}

fruits.forEach(element => console.log(element));

// 4. Add, delete, copy
// push : add an item to the end <----> unshift : add an item to the beginning
fruits.unshift('strawberry', 'orange');
console.log(fruits);

// pop : remove an item from the end <----> shift : remove an item to the beginning
fruits.shift();
console.log(fruits);

// note!! shift, unshift are slower than pop, push
// splice : remove an item by index position
console.clear();
fruits.push('strawberry', 'orange', 'lemon');
console.log(fruits);
fruits.splice(1,3, 'mango', 'potato'); // 1~3까지 지우고, 두 값을 넣는다.
console.log(fruits);

// concat : combine two array!
const fruits2 = ['Abocado', 'coconut'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. searching
// indexof : find the index
console.clear();
console.log(fruits);
console.log(fruits.indexOf('potato'));
// includes : return true or false by existence of value/
console.log(fruits.includes('potato'));
// lastIndexOf
console.log(fruits.indexOf('orange')); // indexof는 제일 앞에꺼 반환
console.log(fruits.lastIndexOf('orange')); // indexof는 제일 뒤에꺼 반환


console.clear();
const family = new Array();
family.push('KangYangsik', 'ParkGeumsun', 'KangKihoon', 'KangSehoon');
console.log(family);
console.log(family.toString());
console.log(family.toLocaleString());

