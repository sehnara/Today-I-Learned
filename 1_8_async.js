'use strict';

// async & await
// clear style of using promise = syntatic sugar!

// 1. async
// 자동으로 promise로 바꿔준다.
async function fetchUser(){    
    // do network request in 10 secs....
    return 'ellie';
}
const user = fetchUser();
console.log(user);

// 2. await ** 기다려!
// async 함수에서만 쓸 수 있음
function delay(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
async function getApple(){
    await delay(2000);
    return 'apple';
}

async function getBanana(){
    await delay(1000);
    return 'banana';
}

async function pickFruits(){
  // async 병렬처리
  const applePromise = getApple();
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;
  return `${apple} + ${banana}`;
}
pickFruits().then(console.log);

// 3. usefuul Promise APIs
//all : 모든 프로미스들을 기다려준다음 넘어감
function pickAllFruits(){
    return Promise.all([getApple(), getBanana()]).then(fruits =>
        fruits.join('+'));
}
pickFruits().then(console.log);

// race 
function pickOnlyOne(){
    return Promise.race([getApple(), getBanana()]);
}
pickOnlyOne().then(console.log);