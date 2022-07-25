
type LocalCityType = {
    title: string
    countryTitle: string
}

type AdressType = {
    srteetTitle: string
    city: LocalCityType
}

type TechType = {
    id: number
    title: string

}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    adress: AdressType
    tecnologies: Array<TechType>
}


const student: StudentType = {
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

console.log(student.age)
console.log(student.name)
console.log(student.tecnologies[2].title)

