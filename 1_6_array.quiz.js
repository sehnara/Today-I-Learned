// quiz
console.clear();

//1. make a string out of an array 
{
    const s_fruits = ['apple', 'banana', 'orange'];
    const stringFruit = s_fruits.toString();
    console.log(`1. ${stringFruit}`);
}

//2. make an array out of a string
{
    const s_fruits = 'apple, kiwi, banana, cherry';  
    const result = s_fruits.split(',')
    console.log(result);
}

//3. make this array look like this : [5,4,3,2,1]
{
    const array = [1,2,3,4,5];
    // console.log(`3. ${array.sort((a,b)=>b-a)}`);
    const result = array.reverse();
    console.log(result);
}

//4. make new array without the first two elements
{
    //splice <---> slice
    // splice는 기존의 배열을 변형하고, slice는 변형된 새로운 배열을 만드는 것!
    const array = [1,2,3,4,5];    
    const result = array.slice(2,5);
    console.log(result);
    console.log(array); 
}

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
   // 5. find a student with the score 90
   // find함수
   {
        const result = students.find(student => student.score === 90);
        const resu = students.find(student => student.name !== 'A' && student.enrolled ===true);
        console.log(result);
   }
   // 6. make an array of enrolled students
   {
        const result = students.filter(student => student.enrolled === true);
        console.log(result);
   }
   // 7. make an array containing only the students' score
   // map 함수 : 배열 안의 요소 한가지 한가지를 다른 요소로 바꿔줌
   {
       const result = students.map(student => student.score);
       console.log(result);
   }
   // 8. check if there is a studnet with the score lower than 50
   // some함수 : (any) 배열 중에서 조건에 충족하는 게 하나라도 있으면 true
   // every함수 : (all) 배열의 모든 요소가 조건에 충족해야 true
   {
    //    console.clear();
       const result1 = students.some((student) => student.score < 50);
       console.log(result1);
       const result2 = students.every((student) => student.score < 50);
       console.log(result2);
   }

   // 9. compute student's average score
   //reduce함수 <==> reduceRight함수(뒤에서부터) (순서만 다르다)
   {
        const result = students.reduce((prev, curr) => prev+curr.score,0);
        console.log(result/students.length);   
   }

   // 10. make a string containing all the scores
   // 함수형 프로그래밍
   {
       const result = students
       .map(student =>student.score)
       .sort((a,b)=>a-b)
       .join(',');       
       console.log(result);
   }

   //내가 했던 답
//    {
//     const enrolledStudents = new Array();
//     const results = [];

//     for (const element of students) {
//         if(element.score === 90){
//             console.log('5. ' + element.name);
//         }
//         if(element.enrolled){
//             enrolledStudents.push(element);
//         }
//         results.push(element.score);
//     } 
//     enrolledStudents.forEach(ele=>{
//         console.log(ele.name);
//     });
//     console.log('7. '+ results); 

//     let avg = 0;
//     results.forEach(element=>{
//         if(element<50){
//             console.log('8. Yes');
//         }
//         avg += element;
//     });
//     console.log('9. ' + avg/results.length);
//     console.log('10. '+ results.join(','));
//     console.log('Bonus. ' + (results.sort((a,b)=>a-b)).join(','));
// }


