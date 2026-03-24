import {useEffect, useState} from "react";
import axios from 'axios';

interface BlogPostContentInterface {
  blogPostId: number
}

export function BlogPostContent( {blogPostId}: BlogPostContentInterface ) {
  const [data, setData] = useState<string>('');
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  console.log(blogPostId);

  useEffect(() => {
    axios.get("/posts/" + blogPostId + "/post.html")
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      })
      .catch((error) => {
        console.log(error);
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  })

  if (isLoading) {
    return <div>Loading post...</div>
  }

  if (isError) {
    return <div>Error while loading post</div>
  }

  return (
    <div className={"blog-post-content text-xl"}>
      <div dangerouslySetInnerHTML={{ __html: data }}></div>
    </div>
  )
}