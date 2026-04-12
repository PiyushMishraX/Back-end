import React, { useState } from 'react'

const Feed = () => {

    const [posts, SetPosts] = useState([
        {
            _id:"1",
            image: "https://images.unsplash.com/photo-1601297183305-6df142704ea2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xlYXIlMjBza3l8ZW58MHx8MHx8fDA%3D",
            caption:"beautiful sky",
        }
    ])

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