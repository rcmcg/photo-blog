import {Header} from "~/header";
import {useParams} from "react-router";
import blogPosts from "~/posts";

export default function BlogPost() {
  let params = useParams();
  let blogPost = blogPosts.find(v => v.id == Number(params.id))

  if (!blogPost) {
    return <div>Failed to find blog post with ID {params.id}</div>
  }

  return (
    <>
      <div className={"flex-col"}>
        <Header />
        <div>{blogPost.title}</div>
        <div>{blogPost.uploadedDate}</div>
      </div>
    </>
  )
}