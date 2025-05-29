import { useEffect, useState } from "react"

function Storage({obj}) {
   
    return<>
    {obj.map((item) => (
        <p>{item}</p>
    ))}
    </>
}
export default Storage