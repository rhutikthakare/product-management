import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import './Home.css'

function Home() {
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get('http://localhost:3031/products')
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])

    const navigate=useNavigate();

    const handelDelete=(id)=>{
      const confirm=window.confirm("would you ike to delete");
      if(confirm){
        axios.delete('http://localhost:3031/products/'+ id)
        .then(res=>{
          window.location.reload();
        }).catch(err=>console.log(err))
  
      }
    }
  return (
    <div className='main-container'>
    <div className='container'>
      
      <h1>productos list </h1>
      <div>
        <button className='add_button'><Link to='/create'>Add</Link></button>
      </div>
      <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>title</th>
                <th>price</th>
                <th>brand</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.title}</td>
                        <td>{d.price}</td>
                        <td>{d.brand}</td>
                        <td>
                           <button className='action-button'><Link to={`/read/${d.id}`}>Read</Link></button>
                           <button className='action-button'> <Link to={`/update/${d.id}`}>Edit</Link></button>
                            <button className='action-button' onClick={e=>handelDelete(d.id)}>Delete</button>
                        </td>

                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
    </div>
  )

}

export default Home
