/*
array
*/
let a = 10
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