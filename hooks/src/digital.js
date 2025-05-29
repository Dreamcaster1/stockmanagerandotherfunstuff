import { use, useEffect, useState } from "react";
function Digital() {
    let [time,timechange] = useState("")
useEffect(() => {
    let IdTimer = setInterval(()=>
    {
        let secs = new Date()
        let str = secs.getMinutes().toString().length == 1 ? "0" + secs.getMinutes()  : secs.getMinutes()
        let str2 = secs.getSeconds().toString().length == 1 ? "0" + secs.getSeconds()  : secs.getSeconds()
        let str3 = secs.getHours().toString().length == 1 ? "0" + secs.getHours()  : secs.getHours()
       timechange(str3 + ":" + str + ":" + str2)
    })
  return ()=> clearInterval(IdTimer)
}, [])
    return<>
    <p>{time}</p>
    </>
}
export default Digital