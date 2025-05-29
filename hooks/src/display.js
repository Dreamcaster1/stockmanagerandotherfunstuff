import { useEffect, useState } from "react"
import Search from "./search";
import P from "./p.js";
function Display() {
let [items, setitems] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then((res) => res.json())
        .then((data) => setitems(data.map((d) => d.title)));
    }, [items])
    return<>
    <Search
    items = {items}
    />
    </>
}
export default Display