import { useState, useEffect} from 'react';
import { FixedSizeList as List } from 'react-window';
import "./new.css"
import Portfolio from './portfolio';
function Stockinput() {
    let [curr, changecurr] = useState("USD")
    let [namest, changenamest] = useState()
    let [data, changedata] = useState([])
    let [code, changecode] = useState([])
    let [price, changeprice] = useState()
    let [ev, changeev] = useState()
    let [descdata, changedescdata] = useState(data)
    let [bool, changebool] = useState(false)
    let [bool2, changebool2] = useState(false)
    let [totalamount, changetotalamount] = useState(0)
    let [totalamountint, changetotalamountint] = useState(0)
    let [totalportfolio, changetotalportfolio] = useState([])
    let [numberofstocks, changenumofstocks] = useState(0)
    let [fullportfolio, changefullportfolio] = useState([])
    let [conversion, changeconversiontoeur] = useState()
    let [conversion2, changeconversiontousd] = useState()
    useEffect(()=> {
        async function load()
        {
         let res = await fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=d0caobhr01qs9fjlmjdgd0caobhr01qs9fjlmje0")
         let data = await res.json()
         changedata(data)
         changedescdata(data)
        }
        load()
    },[])
    const Row = ({ index, style }) => (
        <div onClick={(e) => func2(e)} id='list' style={{...style,  border:'1px solid black'}}>{descdata[index] !== null ? descdata[index].description : ""}</div>
      );
    useEffect(() => {
  if (ev !== "") {
    changedescdata(data.filter((e) => e.description.includes(ev)));
  } else {
    changedescdata(data);
  }
}, [ev, data]);
    function func1(e) {
        changeev(e.target.value)
    }
     function func3(e) {
        changenumofstocks(e.target.value)
        changebool2(false)
        if(e.target.value < 0) {
            changetotalamount("You cannot have negative stocks")
        }
        else if(e.target.value > 10000) {
            changetotalamount("You are not that rich")
        }
        else {
            changetotalamount(parseInt(e.target.value * price))
            changetotalamountint(totalamount)
        }
    }
    function func2(e) {
        changebool2(true)
        changenumofstocks(0)
        console.log(numberofstocks)
        changetotalamount(0)
        changebool(true)
        changeprice("Loading")
        async function loading() {
            let res = await fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=d0caobhr01qs9fjlmjdgd0caobhr01qs9fjlmje0")
            let data = await res.json()
            changecode(data.filter(d=> d.description === e.target.textContent)[0].symbol)
            let res2 = await fetch(`https://finnhub.io/api/v1/quote?symbol=${code}&token=d0caobhr01qs9fjlmjdgd0caobhr01qs9fjlmje0`)
            let data2 = await res2.json()
            changeprice(data2.c)
            let obj = {
                nameofstock: e.target.textContent,
                amountofstock: totalamountint
            }
            changetotalportfolio([...totalportfolio, obj])
        }
        
        loading()
        changenamest(e.target.textContent)
    }
    function func4() {
       async function load()
        {
         let res = await fetch("https://finnhub.io/api/v1/stock/symbol?exchange=US&token=d0caobhr01qs9fjlmjdgd0caobhr01qs9fjlmje0")
         let data = await res.json()
         changedata(data)
         changedescdata(data)
        }
        load()  
    }   
    return<>
    <div className="search-container">
  <input
    type="text"
    placeholder="Search for a stock..."
    className="search-input"
    onChange={(e) => func1(e)}
  />
</div>
   {data.length > 0 ?
  <div className="list-container">
    <List
      height={250}
      itemCount={descdata.length}
      itemSize={40}
      width={400}
    >
      {Row}
    </List>
  </div>
: "Loading"}
 <button onClick={() => func4()}>Update the prices</button>
 <div>
  <p>{price === undefined ? "" : namest}</p>
  <p>{price === undefined ? "" : "Current price: " + price}</p>
 </div>
 <div>
    
 {price === "Loading" || data.length === 0 || bool === false ? "" : <input onChange={(e) => func3(e)} type="number" min="0" max="10000"></input>}
 {Number.isInteger(totalamount) ? 
 (<p>{price === "Loading" || data.length === 0 || bool === false  ? " " : namest + " shares that you have equal to " + (curr === "EUR" ? totalamount.toFixed(1)*conversion: totalamount.toFixed(1)) + " " + curr}</p>)
  : <p>{totalamount}</p>}
 </div>
 {price === "Loading" || data.length === 0 || bool === false  ? "" :<Portfolio
   namest={namest}
   totalamount={totalamount}
   numberofstocks = {numberofstocks}
   bool2 = {bool2}
   fullportfolio = {fullportfolio}
   changefullportfolio = {changefullportfolio}
   curr = {curr}
   changecurr = {changecurr}
   changeconversiontoeur = {changeconversiontoeur}
   changeconversiontousd = {changeconversiontousd}
   changetotalamount = {changetotalamount}
   conversion = {conversion}
   conversion2 = {conversion2}
 />}
 
    </>
   
}
/*hi*/
export default Stockinput