/*
array
*/
/* let a = 10
let b = 20
let c = 30
console.log ('a:', a , 'b:', b , 'c:', c)
let ages = [10,20,30] // array 3 items
console.log('ages:', ages)
console.log('ages[1]:', ages[1]) 
// 1. แทนที่ ค้่าข้อมูลใน array 
ages = [15 , 25]
console.log('ages list :', ages)
// 2. ต่อ array 
ages.push(35)
console.log('ages after push :', ages)
// 3. ลบข้อมูลตัวสุดท้ายใน array
ages.pop()
console.log('ages after pop :', ages)


/* 
array 
*/
/* let ages = [25,30,35,40,45]
console.log('Ages :', ages)

let fruits = ['apple', 'banana', 'cherry']
console.log('Fruits :', fruits)
fruits.push ('mango')
console.log('Fruits after push :', fruits)
console.log('First fruit :', fruits.length)
for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit at index ${i} :`, fruits[i])
} 

/*
object 
*/
/* let student = [{
    age : 30,
    name : 'John',
    grade : 'A'
} , {
    age : 25,
    name : 'Jane',
    grade : 'B'
}]
for (let i = 0; i < student.length; i++) {
    console.log ("Student", + (i + 1) + ":",) ;
    console.log('name :', student[i].name);
    console.log('age :', student[i].age);
    console.log('grade :', student[i].grade);
}
student.push({
    age : 28,
    name : 'Mike',
    grade : 'C'
}) ; 
console.log ("Added new student:" , student[student.length - 1]) ;
student.pop() ;
console.log ("Removed last student. Current students:" ,  student) ;

/*
function
*/
/* let score1 =  10 
let score2 =  80
// ประกาศฟังก์ชัน calculate_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
function calculate_grade(parameter) {


if (score >= 80 ) {
    grade = 'A'
} else if (score >= 70 ) {
    grade = 'B'
} else if (score >= 60 ) {
    grade = 'C'
} else if (score >= 50 ) {
    grade = 'D'
} else {
    grade = 'F'
}
return grade+
}

// เรียกใช้ฟังก์ชัน calculate_grade เพื่อหาค่าเกรดจากคะแนนที่กำหนด
let grade1 = calculate_grade(score1)
let grade2 = calculate_grade(score2)
console.log('Score1 :', score1 , 'Grade :', grade1)
console.log('Score2 :', score2 , 'Grade :', grade2)

/*
arrray
*/
/*let scores = [90 , 80 , 70 , 60 , 50] ;
let newscores = [] 
for (let i = 0; i < scores.length; i++) {
    console.log (scores[i]) ;
   // if (scores[i] >= 60) {
     //   newscores.push (scores[i]) ;
    //}
}
let newscores = scores.filter(function(score) {
    return score >= 60;
})

newscores.forEach((ns) => {
    console.log('New Score :', ns) ;
})

/*scores =  scores.map((s) => {
    return s - 10 ;
}

    scores.forEach((s) => { 
      //  console.log('Score :', s) ;
        console.log('score :' , s) ;
        
})
// map , filter 


/*
object function
*/
let student = [
    { name : "John " , age : 20 , grade : "A" } ,
    { name : "Jane " , age : 22 , grade : "B" } ,
    { name : "Jim " , age : 21 , grade : "c" } ,
]
console.log ("Students :" , student[0]) ;
let student = student.find((s) =>  {

    return s.name === "Jane";
}) ;
let dubbleAgeStudents = student.map((s) => {
    s.age = s.age * 2 ;
    return s ;
}) ;
let highGradeStudents = student.filter((s) => {
    return s.grade === "A" ;
}) ;
console.log ('Students' , student);
console.log ('Dubble Age Students :' , dubbleAgeStudents) ;
console.log ('High Grade Students :' , highGradeStudents) ;