import { useEffect, useState } from "react"
import "./application.css"
import { MyContext } from "./block.js"
import Settings from "./settings.js"
function Apllication() {
    let [obj, changeobj] = useState({
        theme: "",
        language: ""
    })
    function func1(event) {
      let NewObj = {...obj}
      NewObj.language = event.target.value
      changeobj(NewObj)
    }
    function func2(event) {
        let obj1 = {...obj}
        obj1.theme = event.target.value
        changeobj(obj1)
    }
    useEffect(() => {
        window.localStorage.setItem("language", JSON.stringify(obj))
    }, [obj])
    return<>
   <div>
    <form>
        <p>What language do you prefer</p>
        <input onChange={(event) => func1(event)} type="radio" name="language" value="English"></input>
        <label>English</label>
        <br></br>
        <input onChange={(event) => func1(event)} type="radio" name="language" value="Ukrainian"></input>
        <label>Ukrainian</label>
        <br></br>
        <input onChange={(event) => func1(event)} type="radio" name="language" value="Russian"></input>
        <label>Russian</label>
        <br></br>
    </form>
</div>
<div>
    <form>
        <p>What theme do you prefer</p>
        <input onChange={(event) => func2(event)} type="radio" name="theme" value="black"></input>
        <label>Dark</label>
        <br></br>
        <input onChange={(event) => func2(event)} type="radio" name="theme" value="white"></input>
        <label>Light</label>
        <br></br>
    </form>
</div>
<MyContext.Provider value={obj}>
    <Settings></Settings>
</MyContext.Provider>
    </>
}
export default Apllication