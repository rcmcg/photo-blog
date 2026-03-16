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
      <div className={"flex-col h-fit"}>
        <Header />
        <div className={"flex justify-center"}>
          <div className={"w-fit"}>{blogPost.title}</div>
        </div>
        <div className={"flex justify-center"}>
          <div className={"w-fit"}>{blogPost.uploadedDate}</div>
        </div>
      </div>
    </>
  )
}