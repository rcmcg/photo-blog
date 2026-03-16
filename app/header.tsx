import {useNavigate} from "react-router";

export function Header() {
  let navigate = useNavigate()

  function handleClick() {
    navigate("/")
  }

  return (
    <>
      <div className={"font-iceland"}>
        <div className={"flex justify-center"}>
          <div className={"text-9xl"}>rcmcgPhotoBlog</div>
        </div>
        <button
          className={"text-4xl underline cursor-pointer w-full"}
          onClick={handleClick}
        >
          Home
        </button>
      </div>
    </>
  )
}