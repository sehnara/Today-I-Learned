class UserStorage{
    loginUser = (id, password) => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if((id==="ellie"&&password==="Dream")||(id==="sehoon"&&password==="hanna")){
                resolve(id);
            }
            else{
                reject(new Error('not founnd'));
            }
        },2000);
    });  

    getRoles = user => new Promise((resolve, reject)=>{
        setTimeout(()=>{
            if(user === "ellie"||user === 'sehoon'){
                resolve({name : user , role : 'admin'});
            }
            else{
                reject(new Error('Error'));
            }
        },1000);
    }); 
}

const userStorage = new UserStorage;
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(id,password)
.then(userStorage.getRoles)
.catch(console.log)
.then(user=>console.log(`hello ${user.name}! you have a ${user.role}`))
.catch(console.log);
    
