import { useState } from "react"
import Scroll from "./scroll.js"
function Messages() {
let [messages, changemessages] = useState([])
let [latest, changelatest] = useState()
function func1(event) {
    changelatest(event.target.value)
}
function func2() {
    changemessages([...messages, latest])
    console.log(messages)
}
    return<>
        <div>
            <input onChange={(event) => func1(event)}></input>
            <button onClick={() => func2()}>Send the message</button>
        </div>
       <Scroll
       messages = {messages}
       />
    </>
}
export default Messages