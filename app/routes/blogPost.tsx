import {Header} from "~/header";
import {useParams} from "react-router";
import blogPostsMetadata from "~/blogPosts";
import {BlogPostContent} from "~/BlogPostContent";

export default function BlogPost() {
  let params = useParams();
  let blogPost = blogPostsMetadata.find(v => v.id == Number(params.id))

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
            <BlogPostContent blogPostId={blogPost.id} />
          </div>
          ) : (
            <div>Failed to find blog post with ID {params.id}</div>
          )}
      </div>
    </>
  )
}