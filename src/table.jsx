import { useEffect, useState } from 'react'
import axios from 'axios'

const Table = () => {
    const [data , Setdata] = useState([]);
    const [sort, SetSort] = useState("asc");
    const [cart, SetCart] = useState([]);


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
                <button
                style={{
                    padding: "10px 20px",
                    border: "none",
                }}
                onClick={() => {
                    alert(`Added ${item.productName} to cart`);
                    SetCart([...cart, item]);
                    console.log(cart); 
                }}
                >
                    Add to Cart 
                </button>
            </td>
           </tr>
        )
    })

    const cartItems = cart.map((item) => ({
        brandName: item.brandName,
        color: item.color,
        price: item.price,
        productName: item.productName,
        serialId: item.serialId,
        size: item.size

    })

)
   

  return (
    <div
        style={{
            
            padding: "20px",
            gap : "20px",
            border: "1px solid #ccc",
            borderRadius: "10px"
        }}>
        <button 
        style={{marginRight:"10px",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            backgroundColor: "#4CAF50",
            marginBottom: "20px",
            color: "white",
            fontSize: "16px",
            transition: "background-color 0.3s ease",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"

        }}
        
        onClick={()=>sorting("price")}>Sort By Price </button>

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



        <div style={{marginTop: "20px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            backgroundColor: "#f9f9f9",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
        }}>
            <h3>Cart </h3>
            <ul>


                     {cartItems.map((item) => (
    <li>

      {item.productName} - ₹{item.price} ({item.brandName})
  

                </li>
                ))}
            </ul>
          
            

            </div>
       
    </div>
    
  )
}

export default Table