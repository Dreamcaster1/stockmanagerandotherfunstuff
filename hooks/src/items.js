import {memo} from "react"
function Items({func1, arr}) {
    let res = arr.map((item) => {
        return<p>{item}</p>
    })
    console.log("items render")
    return<>
    <div>
      <button onClick={() => func1()}>Click me to add</button>
      {res}
      <p>Here are your items {}</p>
    </div>
    </>
}
export default memo(Items)