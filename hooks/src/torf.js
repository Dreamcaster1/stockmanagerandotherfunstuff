import { useRef, useState, useEffect } from "react"
import Language from "./language"
import Point from "./point"
function Torf({langu, points, changepoints}) {
let [fact, changefact] = useState()

let [status, changestatus] = useState()
let [rand, changerand] = useState()
function func1(current) {    
   randomftrue(current.target)
   fetch(`https://meowfacts.herokuapp.com/?lang=${langu}`)
  .then(response => response.json())
  .then(data => changefact(data.data.join('')));
}
useEffect(() => {
    if(status == true) {
        changepoints(points => points + 1)
    }
    if(status == false) {
        changepoints(points => points - 1)
    }
}, [fact])
function randomftrue(current) {   
    changerand(Math.random())
    let res1 = (current.innerHTML == "True" && rand > 0.5)? true : false
    let res2 = (current.innerHTML == "False" && rand < 0.5)? true : false
    current.innerHTML == "True" ? changestatus(res1) : changestatus(res2)
   }
useEffect(() => {
    fetch(`https://meowfacts.herokuapp.com/?lang=${langu}`)
    .then(response => response.json())
    .then(data => changefact(data.data.join('')));
}, [])
    return<>
      <div>
        <p>{fact}</p>
        <p>{status == true ? "You guessed!" : "You did not guess("}</p>
        <button onClick={(e) => func1(e)}>True</button>
        <button onClick={(e) => func1(e)}>False</button>
       
    </div>
   
    </>
}
export default Torf