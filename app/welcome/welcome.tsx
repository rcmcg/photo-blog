import {Header} from "~/header";
import {BlogPostPreview} from "~/blogPostPreview";

export function Welcome() {

  let blogPosts = [
    {
      id: 0,
      title: "First blog post"
    },
    {
      id: 1,
      title: "Second blog post"
    }
  ]

  return (
    <>
      <div className={"flex-col"}>
        <Header />
        {blogPosts.map(blogPost =>
          <BlogPostPreview
            key={blogPost.id}
            id={blogPost.id}
            title={blogPost.title}
          />
        )}
      </div>
    </>
  );
}