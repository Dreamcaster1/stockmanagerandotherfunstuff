import { use, useEffect, useRef, useState } from "react"
import Interval from "./interval"

function Textsave() {
    let [p, changep] = useState("")
    let ref = useRef()
    let [bool, changebool] = useState(false)
    let [text, changetext] = useState('')
    function func1(event) {
        changetext(event.target.value)
        console.log(bool)
        changebool(false)
    }
    function add() {
        changebool(true)
    }
    function clear() {
        changebool(false)
    }
    useEffect(() => {
        if (text != "") {
            ref.current = setTimeout(add, 2000)
            
        }
        return () => clearInterval(ref.current)
    }, [text])
    return<>
    {bool == true ? <p>Text saved</p> : ""}
    <textarea onBlur={() => clear()} onChange={(event) => func1(event)}></textarea>
    </>
}
export default Textsave