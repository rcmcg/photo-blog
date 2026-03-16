import {Header} from "~/header";
import {useParams} from "react-router";
import blogPosts from "~/posts";
import Markdown from "react-markdown";

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
        <div>
          <div className={"flex justify-start text-7xl font-iceland mt-5"}>
            <div className={"w-fit"}>{blogPost.title}</div>
          </div>
          <div className={"flex justify-start text-xl"}>
            <div className={"w-fit"}>Created {blogPost.uploadedDate}</div>
          </div>
          <div>
            <Markdown>{blogPost.content}</Markdown>
          </div>
        </div>
      </div>
    </>
  )
}