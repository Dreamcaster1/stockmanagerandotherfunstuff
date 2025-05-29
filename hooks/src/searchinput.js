import { useDeferredValue } from "react"

function Searchinput({copy, changecopy, countries, changecountries}) {
    let countriesd = useDeferredValue(countries)
    function func1(e) {
        changecopy(countriesd)
        console.log(copy)
        let res = countries.filter((item) => {
           if(item.toLowerCase().includes(e.target.value)) {
            return item
           }
        })
        changecopy(res)
    }
    return<>
    <input onChange={(e) => func1(e)}></input>
    </>
}
export default Searchinput