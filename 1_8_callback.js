'use strict';

// 1. 동기와 비동기(synchronous and asynchronous)
// Javascript is synchronous.
// 호이스팅이 된 이후부터 하나하나씩 실행된다. 
// 호이스팅 : var, function declaration은 스크립트의 가장 상위로 간다.

// 비동기 (나중에 언제 실행될 지 모르는 걸 '비동기')
console.log('1');                                           // 동기
setTimeout(()=>console.log('2'),2000);                      // 비동기 
console.log('3');                                           // 동기

// 동기 callback
function printImmediately(print){
    print();
}
printImmediately(()=>console.log('print!'));                // 동기

// 비동기 callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}       
printWithDelay(()=> console.log('async callback'),2000);    // 비동기


// Callback Hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id ==="ellie" && password === "dream")||
                (id ==="coder" && password === "academy")
            ){
                onSuccess(id);
            }
            else{
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name : 'ellie', role : 'admin'});
            }
            else{
                onError(new Error('no access'));
            }
        },1000);
    }
}


const userStorage = new UserStorage;
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
    id, 
    password, 
    Login => {
        userStorage.getRoles(
            id,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                    );
            },
            Error =>{
                console.log('Error');
            }    
        );
    },
    Error => {
        console.log('Error');
    }
    )