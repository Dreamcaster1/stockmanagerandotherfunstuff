import { useContext } from "react"
import { Mycontext } from "./barcontext.js"
import "./bar.css"
function Fillerbar() {
    const progress = useContext(Mycontext)

    return <>
    <div id="inside"
        style={{
            width: `${progress}`+ "%"
        }}
        ></div>
    </>
}
export default Fillerbar