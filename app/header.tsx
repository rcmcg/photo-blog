import {useNavigate} from "react-router";

export function Header() {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/")
  }

  return (
    <>
      <div className={"flex-col justify-center"}>
        <div>
          Reece McGowan Photo Blog
        </div>
        <button
          className={"font-funnel-display text-9xl"}
          onClick={handleClick}
        >
          Home
        </button>
      </div>
    </>
  )
}