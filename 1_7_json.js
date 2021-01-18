// JSON
// HTTP(hyperText Transfor Protocal)클라이언트와 서버 간의 request와 response
// 하이퍼텍스트 : 링크, 문서, 이미지 등

// 공부 포인트. serialize and deserialize 
// string을 어떻게 json object로 만들 지, 반대는 또 어떻게 할지에 초점!

// 1. Object to Json
// JSON.stringfy(obj)
let json = JSON.stringify(['apple', 'banana']);
// console.log(json);

const rabbit = {
    name : 'torri',
    color : 'white',
    size : null,
    birthDate : new Date(),
    jump : ()=>{                                    // 함수와 자바스크립트 자체의 요소(symbol...)등은 JSON에서 제외됨
        console.log(`${this.name} can jump!`);
    }
}
json = JSON.stringify(rabbit);
// console.log(json);

json = JSON.stringify(rabbit, ['name', 'color'],String);
// console.log(json);

json = JSON.stringify(rabbit, (key, value) =>{
    console.log(`key : ${key}, value : ${value}`);
    return value;
});
console.log(json);

// 2. Json to Object
// parse(json)

console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value)=>{
    console.log(`key : ${key}, value : ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// obj.jump(); // object -> JOSN할 때, 함수는 사라진다. 따라서 그 json 파일을 parse한 것도 함수가 없다.
console.log(obj.birthDate.getDate());