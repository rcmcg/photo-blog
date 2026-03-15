import Markdown from "react-markdown";
import {Header} from "~/header";

export function Welcome() {

  const markdown = '# Hi, *Pluto*!'

  return (
    <>
      <div className={"flex-col"}>
        <Header />
        <div className={"flex items-center"}>
          <Markdown>{markdown}</Markdown>
        </div>
      </div>
    </>
  );
}