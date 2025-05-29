import { useEffect, useState } from "react"
import Storage from "./storage.js";
function Interface() {
    let [obj, changeobj] = useState([])

    function func1() {
        changeobj([...obj, "User clicked a button"])
        localStorage.setItem("data", JSON.stringify(obj));
       
    }
    function func2() {
        changeobj([...obj, "User changed the input"])
        localStorage.setItem("data", JSON.stringify(obj));
    }
    function func3() {
        changeobj([...obj, "User ticked the box"])
        localStorage.setItem("data", JSON.stringify(obj));
    }
    
    useEffect(() => {
        changeobj(JSON.parse(localStorage.getItem("data")) || ["Hello"])
    }, [])
  
    return<>
        <button onClick={() => func1()}>Click me</button>
        <input onChange={() => func2()}></input>
        <input onClick={() => func3()} type="checkbox"></input>
        <Storage
            obj={obj}
        >
        </Storage>
    </>
}
export default Interface