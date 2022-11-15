import React,{useState} from 'react'
import './App.css'
import { useQuery } from 'react-query'
import Post from './Post'
function App() {
	// let's go
const fetcher= url => fetch(url).then(res => res.json())
const [state,setState]= useState(null);

const {isLoading, data:posts} = useQuery(['posts'],() => fetcher('https://jsonplaceholder.typicode.com/posts'))

const goBack = ()=>{
    setState(null);
}

if(isLoading)
return <h1>Loading....</h1>

const searchOne = (id) =>{
    setState(id)
}
if(state!= null)
    return <p><Post id={state} goback={goBack} /></p>

	return (
		<div className="App">
			<h2>Blog posts</h2>
            {posts.map((post)=>{
                return <a href="#" onClick={()=>searchOne(post.id)}><p >{post.title}</p></a>
            })}
		</div>
	)
}

export default App
