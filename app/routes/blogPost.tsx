import {Header} from "~/header";
import {useParams} from "react-router";
import blogPosts from "~/blogPosts";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export default function BlogPost() {
  let params = useParams();
  let blogPost = blogPosts.find(v => v.id == Number(params.id))

  return (
    <>
      <div className={"flex-col h-fit blog-post"}>
        <Header />
        {blogPost ? (
          <div>
            <div className={"flex justify-start text-5xl xl:text-7xl font-iceland mt-5"}>
              <div className={"w-fit"}>{blogPost.title}</div>
            </div>
            <div className={"flex justify-start text-lg"}>
              <div className={"w-fit"}>Created {blogPost.uploadedDate}</div>
            </div>
            <hr className={"mt-4 mb-4"}/>
            <div className={"markdown-content text-xl"}>
              <Markdown rehypePlugins={[rehypeRaw]}>{blogPost.content}</Markdown>
            </div>
          </div>
          ) : (
            <div>Failed to find blog post with ID {params.id}</div>
          )}
      </div>
    </>
  )
}