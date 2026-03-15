import Markdown from "react-markdown";

export function Welcome() {

  const markdown = '# Hi, *Pluto*!'

  return (
    <div className={"flex items-center"}>
      <Markdown>{markdown}</Markdown>
    </div>
  );
}