

//
// const names = ["Bob", "Alex", "Nick", "John", 100, "alex", "Юрий", "юрий"]
// const numbers = [101, 100, 99, 10000, 11, 8888, - 1, 0]
//
// const compareFunc = ( a,b ) => {
//     if (a< b) {
//         return -1
//     }
//     else {
//         return 1
//     }
// }
//
// const compareFunc1 = ( a,b ) => a - b
// //
// console.log(names.sort(compareFunc))
// console.log(numbers.sort(compareFunc1).reverse())
//



// //
// const students = [
//     {
//         name: "Bob",
//         age: 22,
//         isMarried: true,
//         scores: 95
//     },
//     {
//         name: "Alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Helge",
//         age: 21,
//         isMarried: true,
//         scores: 89
//     },
//     {
//         name: "Nick",
//         age: 20,
//         isMarried: false,
//         scores: 120
//     },
//     {
//         name: "John",
//         age: 19,
//         isMarried: false,
//         scores: 121
//     },
//     {
//         name: "alex",
//         age: 23,
//         isMarried: true,
//         scores: 89
//     },
// ];
// //
// // console.log(students.sort((a,b) => a.scores - b.scores))
// console.log(students.sort((a,b) => a.name > b.name ? 1 : -1))
// //
// //
//
const nums = [11, 56, 47, 99, 12, 87, 34]


for (let j = 0; j< nums.length -1; j++) {
    let isSortted = true
    for (let i = 0; i < nums.length - 1 - j; i++) {
        if(nums[i] > nums[i + 1]) {
            isSortted = false;
            [nums[i + 1], nums[i]] = [nums[i], nums[i+1]]
        }
    }
    if (isSortted) break
}

console.log(nums)