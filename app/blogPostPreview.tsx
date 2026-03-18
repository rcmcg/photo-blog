import {useNavigate} from "react-router";

interface BlogPostPreviewProps {
  id: number;
  title: string;
  uploadedDate: string;
  description: string;
  breakOnBottom: boolean;
}

export function BlogPostPreview(
  {
    id,
    title,
    uploadedDate,
    description,
    breakOnBottom
  }: BlogPostPreviewProps) {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/post/" + id)
  }

  return (
    <div className={"p-2 text-lg xl:text-xl"}>
      <hr />
      <div
        onClick={handleClick}
        className={"underline text-blue-300 cursor-pointer mt-2"}
      >
        {title}
      </div>
      <div>{description}</div>
      <div>{uploadedDate}</div>
      {breakOnBottom && <hr className={"mt-3"}/>}
    </div>
  )
}