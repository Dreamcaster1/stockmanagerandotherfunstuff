import { useEffect, useState } from "react"

function Theme({theme, colortext}) {

    return<>
     <p style={{
        color: colortext,
    }}>Your current theme is {theme}</p>
    </>
}
export default Theme