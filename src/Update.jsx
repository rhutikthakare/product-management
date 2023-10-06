import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Update() {
  // const [data,setData]=useState([])
  const {id}=useParams();
  const navigate=useNavigate()
  
  const [values, setValues] = useState({
    title: '',
    price: '',
    brand: ''
}) 

    useEffect(()=>{
        axios.get('http://localhost:3031/products/'+ id)
        .then(res=>
          setValues(res.data))
        .catch(err=>console.log(err))
    },[])

const handelUpdate=(event)=>{
event.preventDefault();
axios.put(' http://localhost:3031/products/'+ id, values)
.then(res => {
    console.log(res)
    navigate('/')
})
.catch(err => console.log(err))
}
  return (
    <div>
      <h1>Update the User</h1>
       <form onSubmit={handelUpdate} >
                
                <input
                 type='text'
                  name="title"
                  value={values.title}
                  onChange={(e) =>
                    setValues({ ...values, title: e.target.value })}
                ></input>
                <br />
                
                <input 
                type='text'
                 name="price"
                  value={values.brand}
                  onChange={(e) =>
                    setValues({ ...values, brand: e.target.value })}
                ></input>
                <br />
               
                <input
                 type='text'
                  name="brand"
                   value={values.price}
                   onChange={(e) =>
                    setValues({ ...values, price: e.target.value })}
                ></input>
                <br />
                
                <button type='submit'>Update</button>
                <button><Link to="/">back</Link></button>
            </form>
    </div>
  )
}

export default Update
