
// event => e, ev , event
//function => обраблтчки, handler, слушатель


const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

const clickHandler = (e) =>  {
    console.log(e)
}
const clickHandler2 = (e) =>  {
    console.log(e)
}

// sm.onclick = clickHandler
// sm.onclick = null


// sm.addEventListener("click", clickHandler)
// sm.addEventListener("click", clickHandler2)
// sm.removeEventListener("click", clickHandler)

const getCurrentTargetId = (e) => {
    alert (e.currentTarget.id)
    console.log(e.path)
}

// md.addEventListener("click", getCurrentTargetId)
bg.addEventListener("click", getCurrentTargetId)