{//1.
    const fruits = ['apple', 'banana', 'orange'];
    console.log(fruits.join('/'));
}

{//2.
    const fruits = 'apple, kiwi, banana, cherry';
    console.log(fruits.split(','));
}

{//3.
    const fruits = [1,2,3,4,5];    
    console.log(fruits.reverse());    
}

{//4. 
    const array = [1,2,3,4,5];
    // console.log(array.splice(0,2));
    console.log(array.slice(2,5));
    array.splice(0,2);
    console.log(array);
}

class Student{
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

{//5.
    const result = students.find(student => student.scroe === 90);
    console.log(result);
}

{//6.
    const result = students.filter(student => student.enrolled ===true);
    console.log(result);
}

{//7.
    const score = students.map(student => student.score);
    console.log(score);
}

{//8.
    console.log(students.some(student => student.score < 50));
}

{//9.
    const score = students.map(student => student.score);
    const totalScore = score.reduce((prev,curr)=> prev+curr,0)/score.length;
    console.log(totalScore);
}

{//10.
    const score = students.map(student => student.score)
    .sort((a,b)=>a-b)
    .join(',');
    
    console.log(score);
}