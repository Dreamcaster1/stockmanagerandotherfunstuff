import { useState } from "react"
import Torf from "./torf"

function Point({langu}) {
    let [points, changepoints] = useState(0)

    return<>
    <Torf
    langu={langu}    
    points={points}
    changepoints={changepoints}
    />
    <p>{points}</p>
    </>
}
export default Point