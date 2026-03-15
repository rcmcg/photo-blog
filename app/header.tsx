export function Header() {
  function handleClick() {
    console.log("Clicked!")
  }

  return (
    <button onClick={handleClick}>
      Home
    </button>
  )
}