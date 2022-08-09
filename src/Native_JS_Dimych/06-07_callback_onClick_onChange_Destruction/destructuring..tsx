import React, {useState} from 'react';


type LessonsType = {
    title: string
}
type StreetType = {
    title: string
}
type AdressType = {
    street: StreetType
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>,
    adress: AdressType
}


type PropsType = {
title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}





export const ManComponent:React.FC<PropsType> = (props) => {
    //
    // const {title, man: {name}} = props

const [message, setMessage] = useState<string>("Hello")

    return (
        <div>
            <h1>{props.title}</h1>
            <hr/>
            <div>{props.man.name}</div>
        </div>
    );
};

