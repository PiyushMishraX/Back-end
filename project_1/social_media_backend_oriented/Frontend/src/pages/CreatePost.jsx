import React from 'react'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'

const CreatePost = () => {

  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)
    // The FormData interface provides a way to construct a set of key/value pairs representing form fields and their values, which can be sent using the fetch(), XMLHttpRequest.send() or navigator.sendBeacon() methods. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

    // the main work here is done by formData which transfers the full big res to form-data , key/value pair and send the data like postman

    // post to add the / upload the data
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{

      // console.log(res);

      navigate("/feed")
      

      // alert("Post created suucessfully")
      // e.target.reset()

    })
    .catch((err)=>{
      console.log(err);
      alert("Error creating post")
      
    })

  }

  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form onSubmit={handleSubmit} >
            <input type="file" name="image" accept='image/*' />
            <input type="text" name="caption" required placeholder='Enter caption'/>
            <button type='submit'>Sumbit</button>

        </form>

    </section>
  )
}

export default CreatePost