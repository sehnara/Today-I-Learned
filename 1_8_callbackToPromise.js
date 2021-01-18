// Callback Hell example
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    (id ==="ellie" && password === "dream")||
                    (id ==="coder" && password === "academy")
                ){
                    resolve(id);
                }
                else{
                    reject(new Error('not found'));
                }
            }, 2000);
        })        
    }

    getRoles(user){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(user === 'ellie'){
                    resolve({name : 'ellie', role : 'admin'});
                }
                else{
                    reject(new Error('no access'));
                }
            },2000);
        })       
    }
}
const userStorage = new UserStorage;
const id = prompt('enter your  id');
const password = prompt('enter your password');

userStorage.loginUser(id, password)
// .catch(console.log)
.then((id)=>userStorage.getRoles(id))
.then( user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);

// userStorage.loginUser(
//     id, 
//     password, 
//     Login => {
//         userStorage.getRoles(
//             id,
//             userWithRole => {
//                 alert(
//                     `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
//                     );
//             },
//             Error =>{
//                 console.log('Error');
//             }    
//         );
//     },
//     Error => {
//         console.log('Error');
//     }
//     )