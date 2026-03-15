import {useNavigate} from "react-router";

interface BlogPostPreviewProps {
  id: number;
  title: string;
}

export function BlogPostPreview({ id, title}: BlogPostPreviewProps) {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/post")
  }

  return (
    <div onClick={handleClick}>
      <div>{id}</div>
      <div>{title}</div>
    </div>
  )
}