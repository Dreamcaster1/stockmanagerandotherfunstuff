import { useState, useEffect, useMemo, useRef } from 'react';
import "./portfolio.css"
import Changecurr from './changecurr';
function Portfolio({namest, totalamount, numberofstocks, bool2, fullportfolio, changefullportfolio, curr, changecurr, changeconversiontoeur, changeconversiontousd, changetotalamount, conversion, conversion2}) {   
    let ref = useRef(null)
    let [res, changeres] = useState()
    let [whole, changewhole] = useState("")
    let [dsum, changedsum] = useState(0)
    useEffect(() => {
       async function load()
        {
         let res = await fetch("https://v6.exchangerate-api.com/v6/39655384f04dbe4478b4e6b2/latest/USD")
         let data = await res.json()
         changeconversiontoeur(data.conversion_rates.EUR)
         changeconversiontousd(2 - data.conversion_rates.EUR)
        }
        load()
    }, [])
   function func1() {
    let obj = {
        namestock: namest,
        totalprice: totalamount,
        numofstocks: numberofstocks
    }
    console.log(obj.namest)
    let isexist = false
    fullportfolio.forEach((item) => {
        if(item.namestock == obj.namestock) {
            isexist = true
        }
         console.log(item.totalprice + " " + totalamount)
        if(item.totalprice !== totalamount) {
            isexist = false
        }
        else if(item.totalprice == 0 || totalamount == 0) {
            isexist = false
        }
        
    })
    let res = (fullportfolio.filter((item) => {
        return item.namestock != obj.namestock
    }))
   
    if(isexist == false) {
        changefullportfolio([...res, obj])
    }
    
   }
   function func2(e) {        
    
        changefullportfolio(fullportfolio.filter((item) => {
            return item.namestock !== e.target.parentElement.firstChild.innerText.slice(0, e.target.parentElement.firstChild.innerText.indexOf(" you"))
        }))
        console.log(res)
    }
    return<>
    <button disabled={bool2} onClick={() => func1()}>Add to portfolio</button>
    <ul id='ul'>
    {fullportfolio.map((item) => {
        return<>{item.totalprice == "You are not that rich" || item.totalprice == "You cannot have negative stocks" ? "" : <div> 
         <li id='li'>{item.namestock + " " + "you own" + " " + (item.numofstocks < 0 ? item.numofstocks = 0 : item.numofstocks) + " " + "shares" + " " + "which equals to" + " " + (curr == "EUR" ? (item.totalprice == "You are not that rich" || "You cannot have negative stocks" ? 0 : item.totalprice )  * conversion : ((item.totalprice == "You are not that rich" || "You cannot have negative stocks") ? item.totalprice : item.totalprice = 0 )) + " " + curr}</li>
        <button ref={ref} onClick={(e) => func2(e)}>Delete</button>
        </div>}</>
    })}
    <p>{"Your portfolio equals to" + " " + dsum}</p>
    {useEffect(() => {
        fullportfolio.forEach((item) => {
        if (Number.isInteger(item.totalprice)) {
            changedsum(dsum + item.totalprice)
        } 
        })
    },[fullportfolio])}
    </ul>
    <Changecurr
    curr={curr}
    changecurr={changecurr}
    changetotalamount={changetotalamount}
    conversion={conversion}
    conversion2={conversion2}
    totalamount={totalamount}
    />
    </>
}
export default Portfolio