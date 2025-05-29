import { useEffect, useRef } from "react"
import "./scroll.css"
function Scroll({messages}) {
let ref = useRef(null)
    useEffect(() => {
        ref.current.scrollTo({top: ref.current.scrollHeight, behavior:"smooth"})
    }, [messages])
    return<>
     <div ref={ref} id="chatbox" style={{ height: 200, overflowY: 'auto', width: "20%"}}>
        {messages.map(item => {
            return<p>{item}</p>
        })}
     </div>
    </>
}
export default Scroll