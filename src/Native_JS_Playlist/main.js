

console.log(typeof [])
console.log(typeof {})
console.log(typeof (() =>{}))
console.log(Array.isArray([]))

let user ={
    name: "Bob",
    age: 23,
    isStudent: true,
    friend: ["Donald", "Joe", "Vlad", "Alex"]
}
//
// let user2 = user
//
// user.name = "Alex"
// console.log(user2)
// let user2 = {
//
// }
let user2 = {...user}
// user2.name = user.name
// user2.age = user.age
// user2.isStudent = user.isStudent
// user2.name = "Alex"
// user2.ismaried= true

const deepCopyUser = {...user, friends: [...user.friend]}


const students = [
    {name: "Alex"},
    {name: "Bob"},
    {name: "Donald"},
    {name: "Ann"},
]
const newStudents = (students.map(st => st.name === "Ann" ?{...st, name: "Joe"}  : st))
console.log(newStudents === students)


const arr = [1,2,3]
const [a,b,c] = arr



