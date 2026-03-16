import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "rcmcg Photo Blog" },
    { name: "description", content: "Welcome to Reece McGowan's Photo Blog" },
  ];
}

export default function Home() {
  return <Welcome />;
}
