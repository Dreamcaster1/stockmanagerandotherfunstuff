import { useEffect, useMemo, useState } from "react"
import P from "./p";
import "./display.css"
function Search({items}) {
    let [value, setvalue] = useState()
    let [bool, changebool] = useState(false)
    function search() {
        if(value == undefined) {
            return items
        }
        let res = items.filter((item) => {
            if(item.includes(value)) {
                return item
            }
           
        })
        return res
    }
    let result = useMemo(() => search(), [value, items])
    return<>
    <input onChange={(event) => setvalue(event.target.value) && changebool(true)} style={{marginBottom: "20px"}}></input>
    <div id="div" style={{ height: 200, overflowY: 'auto', width:"20%" }}>
    <P
        result = {result}
        bool = {bool}
        items = {items}
        
    />
    </div>
   
    </>
}
export default Search