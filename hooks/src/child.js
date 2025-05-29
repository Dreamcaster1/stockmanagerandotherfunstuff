import { memo } from "react"

const child = memo(function Child({name}) {
    console.log("child render")
    return<>
    <p>Hello {name}</p>
    </>
})
export default child