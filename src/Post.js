import React from 'react'

import {useQuery} from 'react-query'

function Post({id,goback}){
const fetcher= url => fetch(url).then(res => res.json())

const {isLoading, data:post} = useQuery(['post',id],() => fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`))

if(isLoading)
return <h1>Loading ...</h1>
   
return(
<div><a href="#" onClick={goback}><h1 >Go Back</h1></a>
<p>Title :{post.title}</p>
<p>
Body: {post.body}</p>
</div>
)
}

export default Post;