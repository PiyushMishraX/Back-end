import React from 'react'

const CreatePost = () => {
  return (
    <section className='create-post-section'>
        <h1>Create post</h1>

        <form >
            <input type="file" name="image" accept='image/*' />
            <input type="text" name="caption" required placeholder='Enter caption'/>
            <button type='submit'>Sumbit</button>

        </form>

    </section>
  )
}

export default CreatePost