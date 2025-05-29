import { Mycontext } from "./barcontext.js"
import "./bar.css"
import { useEffect, useState } from "react"
import Fillerbar from "./fillerbar.js"
function Barinterface() {
    let [progress, changeprogress] = useState(1)
    function func1(res) {
        changeprogress(progress+1)
    
    }
    useEffect(() => {
         const res = setInterval(func1, 50)
       if(progress == 100) {
        clearInterval(res)
        }
       console.log(progress)
       return ()=>clearInterval(res)
    },[progress])
    return<>
    <div id="bar">
    <Mycontext.Provider value={progress}>
        <Fillerbar></Fillerbar>
    </Mycontext.Provider>
    </div>
    <p>{progress}</p>
    
    </>
}
export default Barinterface