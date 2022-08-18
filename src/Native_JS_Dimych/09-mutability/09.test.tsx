import {User1Type} from './09';


const icreaseAge = (u: User1Type) => {
    u.age++
}

test('reference type test', () => {

    let user1: User1Type = {
        name: 'Dimych',
        age: 32,
        adress: {
            title: 'Minsk'
        }
    }

    icreaseAge(user1)

    expect(user1.age).toBe(33)

    const supermen = user1
    supermen.age = 1000
    expect(user1.age).toBe(1000)

})


test('array reference  test', () => {

    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        },
    ]

    const admins = users
    admins.push({name: 'Bandyugan', age: 10})

    expect(users[2]).toEqual({name: 'Bandyugan', age: 10})


})

test('value type test', () => {

    let usersCount = 100

    let adminCount = usersCount


    adminCount++

    expect(usersCount).toBe(100)
    expect(adminCount).toBe(101)
})


test('1 type test', () => {

    const address = {
        title: 'Minsk'
    }

    let user1: User1Type = {
        name: 'Dimych',
        age: 32,
        adress: address
    }

    let addr = user1.adress

    let user2: User1Type = {
        name: 'Natasha',
        age: 30,
        adress: address
    }

    user2.adress.title = 'Minsk-City'

    expect(user1.adress).toBe(user2.adress)
    expect(user1.adress.title).toBe('Minsk-City')
})

test('2 type array test', () => {

    const address = {
        title: 'Minsk'
    }

    let user1: User1Type = {
        name: 'Dimych',
        age: 32,
        adress: address
    }

    let user2: User1Type = {
        name: 'Natasha',
        age: 30,
        adress: address
    }


const users = [user1, user2, {name: "Katya", age: 4, address: address}]

const admins = [user1, user2]


    admins[0].name = "Dmitry"

    expect(users[0].name).toBe("Dmitry")
    expect(user1.name).toBe("Dmitry")

})