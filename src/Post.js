import React from 'react'

import {useQuery} from 'react-query'

function Post({id,goback}){
const fetcher= url => fetch(url).then(res => res.json())

const {isLoading, data:post} = useQuery(['post',id],() => fetcher(`https://jsonplaceholder.typicode.com/posts/${id}`), {
    // staleTime: 120000,
     cacheTime: 120000,
  
  })

if(isLoading)
return <div><h1>Loading ...</h1></div>
   
return(
<div><a href="#" onClick={goback}><h1 >Go Back</h1></a>
<p>Title :{post.title}
Body: {post.body}</p>
</div>
)
}

export default Post;