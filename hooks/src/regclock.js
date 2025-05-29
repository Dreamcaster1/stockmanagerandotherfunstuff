import { useEffect, useState } from "react"
import "./clock.css"
function Regclock() {
let [rotationsecs, changerotation] = useState(0)
let [rotationmins, changerotationmins] = useState(0)
let [rotationhrs, changerotationhrs] = useState(0)
useEffect(() => {
    
let timer = setInterval(() => {
    let currdate = new Date()
    changerotation(currdate.getSeconds() * 6)
    changerotationmins(currdate.getMinutes() * 6)
    changerotationhrs((currdate.getHours()%12) * 30)
}, 1000)

}, [])
    return<>
        <div id="round">
            <div id="dot"></div>
            <div id="hrs" style={{
                transition: "0.4s",
                 rotate: `${rotationhrs}deg`,
                 transformOrigin: "bottom",
                 position: "absolute",
                 right: "17vh",
                 bottom: "17.2vh",
                 width: "1vh",
                 height: "7vh",
                 borderRadius: "100000000px",
                 backgroundColor: "rgb(33, 33, 144)",
            }}></div>
            <div id="mins" style={{
                transition: "0.4s",
                 rotate: `${rotationmins}deg`,
                 transformOrigin: "bottom",
                 position: "absolute",
                 right: "16.9vh",
                 bottom: "17.2vh",
                 width: "0.7vh",
                 height: "11vh",
                 borderRadius: "100000000px",
                 backgroundColor: "rgb(40, 197, 181)"
            }}></div>
            <div id="secs" style={{
                transition: "0.4s",
                rotate: `${rotationsecs}deg`,
                transformOrigin: "bottom",
                position: "absolute",
                right: "17.1vh",
                bottom: "17.2vh",
                width: "0.4vh",
                height: "14vh",
                borderRadius: "100000000px",
                backgroundColor: "red"
            }}></div>
        </div>
    </>
}
export default Regclock