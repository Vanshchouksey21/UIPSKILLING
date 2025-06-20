import React, { useState } from 'react'

const Abc = () => {
  const mockData = [
    { name: 'Vansh Chouksey', age: 22 },
    { name: 'Aarav Mehta', age: 25 },
    { name: 'Priya Sharma', age: 28 },
    { name: 'Rohan Kapoor', age: 21 }
  ];
  const [mdata , setMdata] = useState([]);

  const datashow =(key) =>{
    alert(`my name is ${key.name}`)
    setMdata([...mdata , key]);
    console.log(mdata);
    
  }

//   const daaa = mdata.map((key)=>{
//     return(
//         <>
//         <ul>
//             <li>
//                 {key.name}
//                 {key.age}
//             </li>
//         </ul>
        
//         </>
//     )
//   })


  const data = mockData.map((key)=>{
    return(
        <>
        <tr>
            <td>{key.name}</td>
            <td>{key.age}</td>
            <td
            style={
                    {display:"flex",
                        justifyContent:"center"
                    }
                }
                    
            >
                <button
                style={
                    {
                        padding:"2px 10px"
                    }}
                    onClick={()=>{
                        datashow(key)
                    }}>
                    Show 
                </button>
            </td>
        </tr>
        </>
    )
  })



  return (
    <div>
      <table border={2} cellPadding={10}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>
                show data
            </th>
          </tr>
        </thead>
        <tbody>
          {data}
        </tbody>
      </table>



      <div
      style={{
        margin:"10px",
        border:"2px solid black",
        borderRadius:"20px",
        width:"400px"
      }}>
        <h1
        style={{
            display:"flex",
            justifyContent:"center"
        }}>
            Clicked Data
        </h1>
        <ul>
           
                {mdata.map((key)=>(
                    <li>
                    {key.name}
                    </li>
                ))}
           
        </ul>

      </div>
    </div>
  )
}

export default Abc;
