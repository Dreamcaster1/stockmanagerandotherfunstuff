import { useEffect, useRef, useState } from "react"
function Usetimer() {
    let [seconds, changeseconds] = useState(0)
    let [bool, changebool] = useState(true)
    let ref = useRef(null)
    
    
    useEffect(() => {
        if (bool == true) {
            ref.current = setInterval(() => changeseconds((s) => s + 1), 1000);
        }
        return () => clearInterval(ref.current) 
    }, [bool])
    return {seconds, bool, changebool, reset: ()=>changeseconds(0)}
}
export default Usetimer