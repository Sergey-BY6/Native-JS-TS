import {MouseEvent, ChangeEvent} from "react"



export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e.currentTarget)
        // alert (e.currentTarget.name)
    }

const onNameCnagged = () => {
    console.log("name changed")
}


const onAgeCnagged = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("age changed: " + e.currentTarget.value)
}

const focusLostHandkler = () => {
    console.log("focus lost")
}





    return <div>
        <textarea onChange={onNameCnagged} onBlur={focusLostHandkler}>Dimych</textarea>
        <input onChange={onAgeCnagged} type={"number"}/>
        <button name="delete" onClick={deleteUser}>delete</button>

    </div>

}