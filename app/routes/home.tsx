import type { Route } from "./+types/home";
import { Welcome } from "~/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Reece's Photo Blog" },
    { name: "description", content: "Welcome to Reece's Photo Blog" },
  ];
}

export default function Home() {
  return <Welcome />;
}
