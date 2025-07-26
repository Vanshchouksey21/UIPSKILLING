import React, { useState } from 'react'

const App = () => {
  const [task , setTask] = useState("");
  const [list , setList] = useState([]);
  const [i , setI] = useState(null);
  const [edtt , setEdtt] = useState(false);

  const edt = (idx)=>{
    setTask(list[idx]);
    setI(idx);
    setEdtt(true);

  }

  const hs = ()=>{
    if (edtt) {
      const updl = [...list];
      updl[i] = task;
      setList(updl)
      setEdtt(false);
      setI(null);
    }
    else{
    setList([...list , task]);
    setTask("");
    }
    
  }



  const dlt =(e)=>{
    const udp = list.filter((_ , e1) => e1 !== e );
    setList(udp);
  }
  return (
    <div>
      <h1>TO DO LIST</h1>
      <input type="text" 
      placeholder='enter ur work ' 
      value={task}
      onChange={(e)=>{setTask(e.target.value)}}
      />
      <button
      onClick={hs}> {edtt ? "update task" : "ad task"}</button>


    <table border={2}>
      <thead>
        <th>idx</th>
        <th>name</th>
        <th>button</th>
      </thead>

      <tbody>
        {list.map((e , index)=>{
          return(
            <tr>
            <td>{index +1}</td>
            <td>{e}</td>
            <td>
              <button onClick={()=>{dlt(index)}}>delete</button>
            </td>
            <td>
              <button onClick={()=>{edt(index)}}>Edit</button>
            </td>
            </tr>
            

          )
        })}
      </tbody>
    </table>
    </div>
  )
}

export default App