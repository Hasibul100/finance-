"use client"
import axios from 'axios'
import React, { useState } from 'react'

function Home() {
  const [form,setForm]=useState("")
  const [user,setUser]=useState([])
  const hndlSubmit =(e)=>{
    e.preventDefault()
    const formdata= new FormData(e.target)
    const name= formdata.get("name")
    const email= formdata.get("email")
    console.log(name,email)
    // const data = Object.fromEntries(formdata.entries())
  //   const data = Object.fromEntries(formdata.entries())
  // const curentData =JSON.stringify(data)
  axios.post("http://localhost:3000/api/users",{name,email},{
    status:201,
    headers:{
      "Content-Type":"application/json"
    }
  })
  }
  return (
    <div>
      <h2>👤 User CRUD App</h2>
      <form onSubmit={hndlSubmit}  >
        {/* <label>Name :</label> */}
        <input name='name' type='text' placeholder='Name' required/>
        {/* <label>Email :</label> */}
        <input name='email' type='email' placeholder='Email' required/>
        <button type='submit'>Add user</button>
      </form>


    </div>
  )
}

export default Home