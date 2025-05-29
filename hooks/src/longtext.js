import { memo } from "react"

let Longtext = memo(function Longtext({text}) {
console.log("text render")
    return<>
    <p>{text}</p>
    </>
})
export default Longtext