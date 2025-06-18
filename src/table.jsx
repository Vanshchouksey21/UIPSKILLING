import { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
    const [data , Setdata] = useState([]);
    const [sort, SetSort] = useState("asc");
    


    const ld =async() =>{
        let api = "https://mocki.io/v1/10512a17-105f-435d-a920-dce1478345bd";
        let res = await axios.get(api);
        console.log(res.data);
        Setdata(res.data);
    }
    useEffect(() => {
        ld();
    }, [])


    const sorting = (key) =>
    {
        const sorted = [...data].sort((a , b) =>{
            if(sort === "asc"){
                return a[key] > b[key] ? 1 : -1 ;

            }
            else{
                return a[key] < b[key] ? 1 : -1 ;
            }

        })
        
        Setdata(sorted);
        SetSort(sort === "asc" ? "desc" : "asc");


    }
    
    const ans = data.map((item) => {
        return (
           <tr>
            <td>{item.brandName}</td>
            <td>{item.color}</td>
            <td>{item.price}</td>
            <td>{item.productName}</td>
            <td>{item.serialId}</td>
            <td>{item.size}</td>
            <td>
                <button>
                    Add to Cart 
                </button>
            </td>
           </tr>
        )
    })

   

  return (
    <div>
        <button  onClick={()=>sorting("price")}>Sort data</button>
        <table border="1" cellPadding="10" cellSpacing="0">
            <thead>
            <tr>
                <th>Brand Name</th>
                <th>Color</th>
                <th>Price</th>
                <th>Product Name</th>
                <th>Serial ID</th>
                <th>Size</th>
                <th>Button</th>
            </tr>
            </thead>
            <tbody>
            {ans}
            </tbody>
        </table>
       
    </div>
    
  )
}

export default Table