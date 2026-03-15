import {Header} from "~/header";
import {BlogPostPreview} from "~/blogPostPreview";

export function Welcome() {

  let blogPosts = [
    {
      id: 0,
      title: "First blog post",
      uploadedDate: "2026-03-15",
      description: "This is the first blog post here"
    },
    {
      id: 1,
      title: "Second blog post",
      uploadedDate: "2026-03-10",
      description: "This is the second blog post here"
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
            uploadedDate={blogPost.uploadedDate}
            description={blogPost.description}
          />
        )}
      </div>
    </>
  );
}