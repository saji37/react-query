import React,{useState} from 'react'
import './App.css'
import { useQuery,QueryClient} from 'react-query'
import Post from './Post'
import client from './react-query-client'
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
    return <Post id={state} goback={goBack} />

	return (
		<div className="App">
			<h2>Blog posts</h2>
            {posts.map((post,index)=>{
                  const cachedPost=client.getQueryData(['post',post.id]);
                return <div><p>{(cachedPost)?'( Visited ) ':''}<a href="#" onClick={()=>searchOne(post.id)}>{post.id}. {post.title}</a></p></div>
            })}
		</div>
	)
}

export default App
