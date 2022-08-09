

const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];


// // const names = ["Bob", "Alex","Nick", "John" ]
//
// const getNames = (array)  => {
//     const result = []
//
//     const getValueForResult = el => el.name
//
//     for ( let i = 0; i<array.length; i++) {
//         const newValue = getValueForResult(array[i])
//         result[i] = newValue
//     }
//     return result
// }
// console.log(getNames(students))
// const getScores = (array) => {
// }

//
// let a = students.filter (maried => !maried.isMarried)
// let b = students.filter (maried => maried.scores > 100)

// console.log(a)
// console.log(b)


// console.log(students.map(s => {
//     return `Student ${s.name}:
//     ${s.age}, ${s.scores}.
//     ${s.isMarried} ? "Maried" : "Not Maried"}`
//     }
// ))


 const updateSstudents = students.map(s => s.name === "Nik" ? {...s, isMarried: true} : s)
// setStudents (updateSstudents)

