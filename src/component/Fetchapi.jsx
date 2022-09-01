import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'

const Client = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

const Fetchapi = () => {
const [posts, setPosts] = useState([])

    const getPost = async () => {
        let res = await Client.get('/posts')
        setPosts(res.data)
    }
    
    useEffect(() => {
        try{
            getPost()
        } catch (error) {
            console.log("Error")
        }
    })

  return (
    <div>
        {
            posts.map((post) => {
                return (
                    <div id='{post.id}'>
                        <h5>{post.title.slice(0, 50)}</h5>
                        <p>{post.body.slice(0, 60)}</p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Fetchapi