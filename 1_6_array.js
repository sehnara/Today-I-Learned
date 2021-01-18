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

// quiz
console.clear();
{
    const s_fruits = ['apple', 'banana', 'orange'];
    const stringFruit = s_fruits.toString();
    console.log(`1. ${stringFruit}`);
}

{
    const s_fruits = 'apple, kiwi, banana, cherry';
    const a_fruits = [];
    console.log(s_fruits.charAt(6));    
    
}
{
    const array = [1,2,3,4,5];
    console.log(`3. ${array.sort((a,b)=>b-a)}`);
}
{
    const array = [1,2,3,4,5];
    console.log(`4_1. ${array.slice(2)}`);
    class Student {
        constructor(name, age, enrolled, score){
            this.name = name;
            this.age = age;
            this.enrolled = enrolled;
            this.score = score;
        }
    }
    const students = [
        new Student('A', 29, true, 45),
        new Student('B', 28, false, 80),
        new Student('C', 30, true, 90),
        new Student('D', 40, false, 66),
        new Student('E', 18, true, 88)
    ];   
    console.log('4_2.')
    const renewal = students.slice(2);
    for (let i = 0; i < renewal.length; i++) {       
        console.log(renewal[i]);
    }    
    console.log('--------------------------------------------------');
    const enrolledStudents = new Array();
    const results = [];

    for (const element of students) {
        if(element.score === 90){
            console.log('5. ' + element.name);
        }
        if(element.enrolled){
            enrolledStudents.push(element);
        }
        results.push(element.score);
    } 
    enrolledStudents.forEach(ele=>{
        console.log(ele.name);
    });
    console.log('7. '+ results); 

    let avg = 0;
    results.forEach(element=>{
        if(element<50){
            console.log('8. Yes');
        }
        avg += element;
    });
    console.log('9. ' + avg/results.length);
    console.log('10. '+ results.join(','));
    console.log('Bonus. ' + (results.sort((a,b)=>a-b)).join(','));
}


