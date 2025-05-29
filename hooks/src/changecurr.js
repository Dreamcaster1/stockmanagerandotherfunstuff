import { useEffect, useState } from "react"
import "./button.css"
function Changecurr({curr, changecurr, changetotalamount, conversion, conversion2, totalamount}) {
let [Left,ChLef] = useState("5px")
    let [isclicked, changeisclicked] = useState(true)
    let border = "black"
    let background2 = "white"
    let theme = "Light"
    let background3 = "white"
    function func1() {
        console.log(curr)
        if(isclicked === true) {
            changecurr("EUR")
        }
        if (isclicked === false) {
            changecurr("USD")
        }
        changeisclicked(!isclicked)
        if (isclicked === true) {
            ChLef("60%")
        }
        if (isclicked === false) {
            ChLef("5%")
        }
    }
    useEffect(() => {
        document.body.style.backgroundColor = background3 
        localStorage.setItem("themekey", theme)
    }, [background3, theme])
    return<>
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
            <p id="lang">{curr}</p>
        </div>
    </div>
    </>
}
export default Changecurr