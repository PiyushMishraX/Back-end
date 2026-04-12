import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'

const Feed = () => {

    const [posts, setPosts] = useState([
        {
            _id:"1",
            image: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D",
            caption:"beautiful sky",
        }
    ])

    useEffect(() => {
      
        // axios.get("https://localhost:3000/posts")
        // is returns all created post
        axios.get("http://localhost:3000/posts")
        .then((res)=>{
            // console.log(res.data);
            setPosts(res.data.posts) // posts store array of object(posts)

            // console.log(posts);
            
            
        })


    }, []) 
    //The useEffect hook in React is primarily used to perform side effects in functional components, such as fetching data, subscribing to external events, or manually changing the DOM.
    // use prevents the multiple times calling of api
    

  return (
    <section className='feed-section'>
        
        {
            posts.length > 0 ? (
                posts.map((post)=>(
                    <div key={post._id}
                    className='post-card'>
                        <img src={post.image} alt={post.caption} />
                        <p>{post.caption}</p>
                    </div>
                ))
            ): (
                <h1>No Posts available</h1>
            )
        }

    </section>
    )
}

export default Feed


// call get /post api with react application to show all posts

// install npm i axios

