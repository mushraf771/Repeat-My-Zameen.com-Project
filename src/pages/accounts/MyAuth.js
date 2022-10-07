import React, { useState } from 'react'
import axios from "axios";

const MyAuth = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  })
  const [email, setemail] = useState("")

  const [password, setpassword] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(formData,'line 14 data before axios')
    axios
      .post("http://127.0.0.1:8000/api/accounts/signup/")
      .then((res) => {
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    setFormData(formData)
  }
  return (
    <>
      <div className=" container my-5 py-5 border bg-success mx-auto text-center">
        <form onSubmit={handleSubmit}>
          <h1> Our Form </h1>
        
          <input placeholder='Name' className='form-control' onChange={(e) => setFormData({ ...formData, email: e.target.value })} value={formData.email} type="text" name="email" id="email" />
        <br/><br/>
          <input  placeholder='Password' className='form-control' onChange={(e) => setFormData({ ...formData, password: e.target.value })} value={formData.password} name="password" id="password"></input>
        <br/><br/>
          <input type="submit" value="Submit" className='btn btn-light' />
        </form>
        </div>
    </>
  )
}; export default MyAuth;
