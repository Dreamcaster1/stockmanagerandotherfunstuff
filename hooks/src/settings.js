import { useContext, useEffect } from "react"
import { MyContext } from "./block.js"
function Settings() {
    let name = useContext(MyContext)
    console.log(name)
    let dark = {
        backgroundColor: name.theme,
        color: "White",
        width: "100vh",
        height: "100vh",
        margin: 0,
        position: "absolute",
        left: 0,
        top: 0,
        zIndex: -2
    }
    return<>
    <div style={dark}>
        <p>Your lang is {name.language}</p>
    </div>
    </>    
}
export default Settings