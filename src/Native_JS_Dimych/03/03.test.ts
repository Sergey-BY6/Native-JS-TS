import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, makeStudentActive} from "./03";

let student:StudentType


beforeEach (() => {
    student = {
        id: 1,
        name: "Dimych",
        age: 32,
        isActive: false,
        adress: {
            srteetTitle: "Surganova",
            city: {
                title: "Minsk",
                countryTitle: "Belarus"
            },
        },
        tecnologies: [
            {
                id: 1,
                title: "HTML"
            },
            {
                id: 2,
                title: "CSS"
            },
            {
                id: 3,
                title: "React"
            }

        ]
    }
    }
)

test ("new tech skill should be added to student", () =>{
    expect (student.tecnologies.length).toBe(3)
addSkill(student, "JS")
    expect (student.tecnologies.length).toBe(4)
    expect (student.tecnologies[3].title).toBe("JS")
    expect (student.tecnologies[3].id).toBeDefined()
})

test ("student should be made active", () =>{
    expect (student.isActive).toBe(false)
    makeStudentActive(student)
    expect (student.isActive).toBe(true)
})

test ("student live is city", () =>{

    let result1 = doesStudentLiveIn(student, "Moscow")
    let result2 = doesStudentLiveIn(student, "Minsk")
    expect (result1).toBe(false)
    expect (result2).toBe(true)
})