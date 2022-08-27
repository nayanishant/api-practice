import './App.css';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Client = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

function App() {

  const getPost = async () => {
    let response = await Client.get("/posts")
    setPosts(response.data)
  }
  
  const [posts, setPosts] = useState([])
  useEffect(() => {
    try{
      getPost()
    } catch (error){
      console.log('Error')
    }
  },[])

  return (
    <div className="App">
      {
        posts.map((post) => {
          return (
            <div id = {post.id}>
              <h4>{post.title}</h4>
              <p>{post.body.slice(0, 70)}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
