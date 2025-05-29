import { useContext } from "react"
import { Mycontext } from "./namecontext.js"

function Nameaccept() {
   const name = useContext(Mycontext)
    return<>
    <p>{name}</p>
    
    </>
}
export default Nameaccept