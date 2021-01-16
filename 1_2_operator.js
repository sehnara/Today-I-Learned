// 1. String concatenation 
console.log('my' + 'cat');
console.log('1'+2);
console.log('1'+'5');
console.log(`string literals : 1+2 = ${1+2}`);

// 2. Numeric operators
//....
console.log(2**3); // 제곱

// 3. Increment and decrement operators
// ++, -- 

// 6. Logical operators || / && / !(not)
// ||(or), true 값이 나오면 뒤에거는 안 본다.
// => (TIP) 조건을 OR이거나 AND로 걸 때, 크기가 큰 건 뒤로 보내는 것이 좋다.
// &&(and), false 나오면 뒤에 값 안 본다.
// null check :

//7. Equality opertars
const stringFive = '5';
const numberFive = 5;
// == : loose equality, 값만 같으면 된다.
console.log(stringFive==numberFive);
console.log(stringFive!=numberFive);
// === : strict equality, 값과 타입 모두 같아야 한다.
console.log(stringFive===numberFive);
console.log(stringFive!==numberFive);

// 8. Conditional opertors : if

// 9. Ternary opertors: ?
const name = 'ellie';
console.log(name==='ellie'?'yes' : `${name}`);

//11. switch case statement

//12/ loops
let i = 3;
do{
    console.log(`do while : ${i}`);
    i--;
}while(i>0);

// break, continue
// - break : 아예 함수 끝
// - continue : 지금 회차만 건너뛰고 다음 회차로 이어짐!
for (let t = 0; t <= 10; t++) {
    if((t%2)===1){continue;}
    console.log(t);    
}
for (let w = 0; w < 10; w++) {
    if(w>=8){break;}
    console.log(w);
}