import { useState } from "react"
import Nameaccept from "./nameaccept"
import { Mycontext } from "./namecontext.js"

function Name() {
    let [name, changename] = useState("Max")
    function func1() {
        changename("Oleg")
    }
    return<>
    <Mycontext.Provider value={name}>
        <Nameaccept></Nameaccept>
    </Mycontext.Provider>
    <button onClick={() => func1()}>Click me</button>
    </>
}
export default Name