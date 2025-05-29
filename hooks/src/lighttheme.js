
import { useEffect, useState } from "react"
import "./button.css"
import Theme from "./theme.js"

function Light() {
    let [Left,ChLef] = useState("5px")
    let [background, changebackground] = useState("black")
    let [isclicked, changeisclicked] = useState(false)
    let [border, changeborder] = useState("black")
    let [background2, changebackground2] = useState("white")
    let [theme, changetheme] = useState("Light")
    let [background3, changebackground3] = useState("white")
    let [colortext, changecolor] = useState("black")
    function func1() {
        changeisclicked(!isclicked)
        if (isclicked == true) {
            changecolor("white")
            changetheme("Dark")
            ChLef("150px")
            changebackground("white")
            changeborder("white")
            changebackground2("black")
            changebackground3("rgb(77, 77, 77)")
        }
        if (isclicked == false) {
            changecolor("black")
            changebackground3("white")
            changetheme("Light")
            ChLef("5px")
            changebackground2("white")
            changebackground("black")
            changeborder("black")
        }
    }
    useEffect(() => {
        document.body.style.backgroundColor = background3 
        localStorage.setItem("themekey", theme)
    }, [background2, theme])
    return<>
    <div style={{
          position: "relative",
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: "50px",
          width: "200px",
          height: "50px",
          backgroundColor: background2,
    }} id="shell">
        <div style={{
            position: "absolute",
            left: Left,
            top: "2px",
            borderColor: border,
            borderStyle: "solid",
            borderRadius: "100px",
            backgroundColor: background,
            width: "40px",
            height: "40px",
        }} id="inside" onClick={() => func1()}>

        </div>
    </div>
   
    <Theme
    theme = {theme}
    colortext = {colortext}
    />
    </>
}
export default Light