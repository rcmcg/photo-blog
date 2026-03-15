import {useNavigate} from "react-router";

interface BlogPostPreviewProps {
  id: number;
  title: string;
  uploadedDate: string;
  description: string;
}

export function BlogPostPreview({ id, title, uploadedDate, description}: BlogPostPreviewProps) {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/post/" + id)
  }

  return (
    <div
      className={"border rounded-2xl p-2 m-2 mb-5"}
      onClick={handleClick}
    >
      <div>{title}</div>
      <div>Uploaded: {uploadedDate}</div>
      <div>{description}</div>
    </div>
  )
}