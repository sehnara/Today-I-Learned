
'use strict';

// promise is JavaScript object for asynchronous operation.
// ** 공부포인트 **
//1) state(기능을 수행하고 있는 중인지, 성공했는지, 실팼는지) 
//   state : pending(진행중 ) => fulfilled(완료) or rejected(못 찾겠다.)
//2) 정보에 대한 제공자와 소비자의 차이점을 이해해야한다. 
//   producer vs Consumer

//1. producer
// *** promise는 만드는 순간 그 안의 콜백함수가 바로 실행된다.
// => 그래서 사용자가 버튼 누르면, 네트워크와 통신할 떄는 다른 거 써야함.
const promise = new Promise((resolve, reject)=>{
    // doing some heavy work(network, read files)
    console.log('doing somthing...');
    setTimeout(()=>{
        resolve('ellie');
        // reject(new Error('no network'));
    },2000);
});


// 2. consumers : then, catch, finally 
promise
.then((value)=>{
    console.log(value);
})
.catch(error=>{
    console.log(error);
})
.finally(()=>{
    console.log('finally');
});


//4. promise chianing
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(1),1000);
});

fetchNumber
.then(num => num*2)
.then(num => num*3)
.then(num => {
    return new Promise((resolve, rejeect)=>{
        setTimeout(()=> resolve(num-1),1000);
    });
})
.then(num => console.log(num));

// 5. error Handling
const getHen = () => 
new Promise((resolve, reject)=>{
    setTimeout(()=>resolve('hen'), 1000);
})

const getEgg = Hen =>
new Promise((resolve, reject)=>{
    setTimeout(()=>reject(new Error(`error! ${Hen} => egg`)),1000);
})

const cook = egg =>
new Promise((resolve, reject)=>{
    setTimeout(()=>resolve(`${egg} => fry`),1000);
})
getHen()            // // hen=>getEgg(hen) 앞의 함수에서 하나의 인수만 받아서 그대로 함수를 실행할 경우 
    .then(getEgg) 
    .catch(error =>{
        return 'bread';
    })
    .then(cook)
    .then(console.log)
    .catch(console.log);