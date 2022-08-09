const ages = [18, 20, 22 ,1, 100, 90, 14]

 export const predicate = (age: number) => {
    return age >90
}

const oldAges = [100]



export type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: "CSS", price: 110},
    {title: "JS", price: 200},
    {title: "React", price: 150},
]

export const chipPredicate = (course: CoursesType) => {
    return course.price <160
}

const chipCourses = [
    {title: "CSS", price: 110},
    {title: "CSS", price: 150},
]