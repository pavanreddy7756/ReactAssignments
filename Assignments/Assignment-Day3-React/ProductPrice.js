import { useState } from "react";

function Productprice(){
    const [pname,setPname]=useState("")
    const [price,setPrice]=useState("")
    const [qty,setQty]=useState("")
    const [total,setTotal]=useState("")


    function buttonClick(){
        if (qty < 10){
            let total = price * qty;
            setTotal(total);
        }
        else if (qty >= 10 && qty < 20){
            let total = price * qty * 0.95;
            setTotal(total);
        }
        else if (qty >= 20 && qty < 30){
            let total = price * qty * 0.90;
            setTotal(total);
        }
        else {
            let total = price * qty * 0.85;
            setTotal(total);
        }
    }
    

    return(
        <>
        <h1>Bill Calculator</h1>
        <fieldset>
            <legend>
                Bill Calculator
            </legend>
            Product Name : <input type="text" value={pname} onChange={(e)=>setPname(e.target.value)}/>
            <br></br>

            Product Price : <input type="text" value={price} onChange={(e)=>setPrice(e.target.value)}/>
            <br></br>

            Quantity :      <input type="text" value={qty} onChange={(e)=>setQty(e.target.value)}/>
            <br></br>

            <input type="button" onClick={buttonClick} value="Calculate"></input>

            <h1>{total}</h1>
        </fieldset>


        </>
    )
}

export  default Productprice;