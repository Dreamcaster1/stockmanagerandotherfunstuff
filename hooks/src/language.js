import { useRef, useState, useEffect } from "react"
import "./button.css"
import Torf from "./torf"
import Point from "./point"
function Language() {
let [Left,ChLef] = useState("5px")
    let [background, changebackground] = useState("black")
    let [isclicked, changeisclicked] = useState(true)
    let [border, changeborder] = useState("black")
    let [background2, changebackground2] = useState("white")
    let [theme, changetheme] = useState("Light")
    let [background3, changebackground3] = useState("white")
    let [colortext, changecolor] = useState("black")
    let [lang, changelang] = useState(false)
    let [langu, changelangu] = useState("")
    function func1() {
        changelang(!lang)
        if(lang == true) {
            changelangu("eng-us")
        }
        if (lang == false) {
            changelangu("ukr")
        }
        changeisclicked(!isclicked)
        if (isclicked == true) {
            ChLef("60%")
        }
        if (isclicked == false) {
            ChLef("5%")
        }
    }
    useEffect(() => {
        document.body.style.backgroundColor = background3 
        localStorage.setItem("themekey", theme)
    }, [background2, theme])
    return<>
    <Point
    langu={langu}    
    />
      <div style={{
          position: "relative",
          borderColor: "black",
          borderStyle: "solid",
          borderRadius: "50px",
          width: "100px",
          height: "40px",
          backgroundColor: background2,
    }} id="shell">
        <div style={{
            position: "absolute",
            left: Left,
            top: "6%",
            borderColor: border,
            borderStyle: "solid",
            borderRadius: "100px",
            width: "30px",
            height: "30px",
        }} id="inside" onClick={() => func1()}>
            <p id="lang">{isclicked == true ? "EN" : "UA"}</p>
        </div>
    </div>
    </>
}
export default Language