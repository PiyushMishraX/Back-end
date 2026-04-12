import React from 'react'
import axios from 'axios'

const CreatePost = () => {

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const formData = new FormData(e.target)

    // post to add the / upload the data
    axios.post("http://localhost:3000/create-post", formData)
    .then((res)=>{

      console.log(res);
      

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