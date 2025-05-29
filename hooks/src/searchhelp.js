import { useEffect, useState } from "react"
import Searchinput from "./searchinput.js"

function Searchhelp() {
let [countries, changecountries] = useState([])
useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {let names = data.map(item => {
        return item.name.common
    })
    changecountries(names)
    changecopy(names)
})
}, [])
let [copy, changecopy] = useState([])  
    return<>
    <Searchinput
    copy = {copy}
    changecopy={changecopy}
    countries = {countries}
    changecountries = {changecountries}
    />
    <ul>
     {copy.map((item, key) => {
        return<li key={key}>{item}</li>
     })}
    </ul>
    </>
}
export default Searchhelp