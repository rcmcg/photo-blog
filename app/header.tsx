import {useNavigate} from "react-router";

export function Header() {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/")
  }

  return (
    <button onClick={handleClick}>
      Home
    </button>
  )
}