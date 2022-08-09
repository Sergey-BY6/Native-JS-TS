import {ManType} from './destructuring.';


let props: ManType

beforeEach( () => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: "1"}, {title: "2"}, {title: "3"}],
        adress: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }
})


test('', () => {
    let props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: 1}, {title: 2}],
        adress: {
            street: {
                title: 'Nezavisimosti street'
            }
        }
    }

    // const age = props.age
    // const lessons = props.lessons

    const {age, lessons} = props
    expect(age).toBe(32)
    expect(lessons.length).toBe(2)
})


test('1', () => {

const l1 = props.lessons[0]
const l2 = props.lessons[1]


    const [,, ls3] = props.lessons

    const [ls1, ...restlessons] = props.lessons

    expect (l1.title).toBe("1")
    expect (l2.title).toBe("2")

    // expect (ls1.title).toBe("1")
    expect (ls3.title).toBe("3")
    expect (restlessons.length).toBe(2)
    expect (restlessons[0].title).toBe("2")



})

