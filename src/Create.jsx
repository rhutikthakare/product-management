import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'


function Create() {
    const [values, setValues] = useState({
        title: '',
        price: '',
        brand: ''
    })

    const navigate = useNavigate();

    const handelSubmit = (event) => {
        event.preventDefault()
      
        axios.post(' http://localhost:3031/products', values)
            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='main-container'>
            <div className='container'>
            <form onSubmit={handelSubmit}>

                <label>Product : &nbsp;</label>
                <input
                 type='text'
                  name="title"
                    onChange={(e) =>
                         setValues({ ...values, title: e.target.value })}
                ></input>
                <br />
                <label>Price &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</label>
                <input 
                type='text'
                 name="price"
                    onChange={e => 
                        setValues({ ...values, price: e.target.value })}
                ></input>
                <br />
               <label>Brand&nbsp;&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;</label>
                <input
                 type='text'
                  name="brand"
                    onChange={e => 
                        setValues({ ...values, brand: e.target.value })}
                ></input>
                <br />
                
                <button type='submit'>submit</button>
                <button><Link to="/">back</Link></button>
            </form>
            </div>
        </div>
    )
}

export default Create
