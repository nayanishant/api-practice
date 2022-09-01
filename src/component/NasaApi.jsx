import React from 'react'
import axios from 'axios'
import { useState } from "react"

const Client = axios.create({
    baseURL: 'https://api.nasa.gov/planetary/apod?api_key=ETlDxneyHxo2MJQeKKa1eToKGVfDEPKehZ04WU8k'
})

const NasaApi = () => {
    const [posts, setPosts] = useState([])

    const getApi = async () => {
        let response = await Client.get()
        setPosts(response.data)
    }

    // useEffect(() => {
    //   try{
    //     getApi()
    //   } catch(error) {
    //     console.log("Error")
    //   }
    // }, [])
    
  return (
    <div>
        <button onClick={getApi}>Fetch Data</button>
        <div id={posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.date}</p>
            <img src={posts.url} alt="#" height={200} width={200} />
        </div>
    </div>
    
  )
}

export default NasaApi