// Function

// 1. Functional declaration
// 제목 짓기 : doSomething, command, verb 형태로 짓기
// One Function One thing
// function은 object의 일부이다.
// hoisting이 가능하다.

// 1-1. function Expression
// : 함수를 할당할 수 있다.
// : hoisting 불가
const print = function(){ // 익명함수
    console.log('print');
};
print();
const printAgain = print;
printAll();

// 1-1-1. callback function 
// : 함수를 파라미터로 주고, 부모 함수에서 적절히 호출가능

function randomQuiz(answer, printYes, printNo){
    if(answer === 'sehoon'){
        printYes();
    }
    else{
        printNo();
    }
}
const printYes = function(){
    console.log('Yes! Correct');
};
const printNo = function print() {
    console.log('No! Retry');
};
randomQuiz('hanna', printYes, printNo);

// 1-1-2. Arrow Function
const Arrow = () => 'sehoon';
console.log(Arrow());

// to do more
const ArrowMore = (a,b) =>{
    let plus = a+b;
    return plus;
}
console.log(ArrowMore(2,4));

// 2. Parameters

// 3. Default Parameters(ES6)
// : 파라미터 값이 undefined일 때, 디폴트 값을 설정해줌
function sendMessage(message, from = 'unknown'){
    document.write(`${message} by ${from}`);
}
sendMessage('I love you', );

// 4. Rest parameters(ES6)
// ... 점 갯수에 따라 배열로 할 수 있다.
function printAll(...args){
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    for (const iterator of args) {
        console.log(iterator);
    }

    args.forEach(elem=>{
        console.log(elem);
    })
}
printAll('sehoon', 'yoojin', 'jihyun');

// 5. local scope
// 밖에서는 안이 보이지 않고, 안에서만 밖을 볼 수 있다. <- 이게 핵심

// 6. return

// 7. early return, early Exit
// === flag
function a(num){
    if(num<=10) return;
}

// 8. IIFE : Immediately Invoked Function Expression
// : 선언함과 동시에 바로 호출
(function hello(){
    console.log('IIFE');
})();



// Quiz

const add = (a,b) => a+b;
const substract = (a,b) => a-b;
const divide = (a,b) => a/b;
const multiply = (a,b) => a*b;
const remainder = (a,b) => a%b;

function calculate(command, a, b){
    switch(command){
        case add : 
        return add(a,b);

        case substract :
        return substract(a,b);

        case divide :
        return divide(a,b);

        case multiply :
        return multiply(a,b);

        case remainder:
        return remainder(a,b);

        default:
            console.log('confirm command value!');
        break;    
    }
} 