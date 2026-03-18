import {Header} from "~/header";
import {BlogPostPreview} from "~/blogPostPreview";
import blogPosts from "~/blogPosts";

export function Welcome() {
  return (
    <>
      <div className={"flex-col w-full xl:w-fit"}>
        <Header />
        {blogPosts.map((blogPost, index) => {
          const isLastBlogPost = index == blogPosts.length - 1
          return <BlogPostPreview
            key={blogPost.id}
            id={blogPost.id}
            title={blogPost.title}
            uploadedDate={blogPost.uploadedDate}
            description={blogPost.description}
            breakOnBottom={isLastBlogPost}
          />
        })}
      </div>
    </>
  );
}