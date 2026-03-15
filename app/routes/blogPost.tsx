import {Header} from "~/header";
import {useParams} from "react-router";

export default function BlogPost() {
  let params = useParams();

  return (
    <>
      <div className={"flex-col"}>
        <Header />
        <div>{params.id}</div>
      </div>
    </>
  )
}