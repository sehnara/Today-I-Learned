// 1. Use strict
// JavaScript is flexible;
// But flexible means Dangerous!
// Declaring 'use strict' blocks Dangerous problems 
'use strict';

// 2. Variables
// let(ES6)
// block scope : 중괄호 안의 것으로 밖에서는 호출 불가 {}
// global scope : 파일에 바로 쓰는 것으로 어디에서나 호출 가능, 
//                프로그램이 시작하고 끝날때까지 동작하기 때문에 메모리 문제있다. 그래서 최소한으로 쓰자!
let globalName = 'global name';
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't eer use this!)
// var hoisting : 어디에 선언했는 지에 상관없이 파일 가장 위에 선언이 올라가게 하는 것.
// block scope : 안통함


// 3. Constants
// favor Immutable data type always(한 번 선언하면 안 바뀔 거)
// reason to use 1. security // 2. thread safety // 3. reduce mistakes

// 4. Variable types
// 1) primitive type :

// number : special numeric values : infinity / -infinity / NaN(not a number)
const infinity = 1/0;
const negativeInfinity = -1/0;
const nAn = 'not a Number' / 2;

console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (최근에 추가, 아직 쓰지마요)
const bigInt = 123456789n;
console.log(`value : ${bigInt}, type : ${typeof(bigInt)}`);

//boolean
// false : 0, null, undefied, nAn, ''

// null vs undefined
// null : 텅텅 비어있는 빈 값이다라고 지정 // undefined : 선언되었지만 값이 할당 안된 상태

//symbol, 고유한 식별자
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1===symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1===gSymbol2);
console.log(`value :${symbol1.description}, type : ${typeof(symbol1)}`);// 출력할 때 description 불러와야 함

//5. Dynamic typing : dynamically typed language 런타임 시 타입이 결정된다./ㅔㅔㅌㅋㅅ
let text = 'hello';
console.log(`value : ${text}, type : ${typeof(text)}`);
text = 1;
console.log(`value : ${text}, type : ${typeof(text)}`);
text = '7'+5;
console.log(`value : ${text}, type : ${typeof(text)}`);
text = '8'/'2';
console.log(`value : ${text}, type : ${typeof(text)}`);
// 2) object type : 