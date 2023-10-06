import React from 'react'
import { useState,useEffect} from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

function Read() {
  const [data,setData]=useState([])
  const {id}=useParams();
  
    useEffect(()=>{
        axios.get('http://localhost:3031/products/'+ id)
        .then(res=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
  
    
    
  return (
    <div className='main-container'>
            <div className='container'>
      <h1>Details of Product</h1>
      <div>
        <strong>Name: {data.title} </strong>
      </div>
      <br/>
      <div>
        <strong>Brand: {data.brand} </strong>
      </div>
      <br/>
      <div>
        <strong>Price: {data.price} $</strong>
      </div>
      <br/>
      <div>
        <strong>Discrption: {data.description} </strong>
      </div>
      <button><Link to={`/update/${id}`}>Edit</Link></button>
      <button><Link to="/">Back</Link></button>
    </div>
    </div>
  )
}

export default Read
