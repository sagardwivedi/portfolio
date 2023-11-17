import { Route } from "next";
import { UrlObject } from "url";

export const navs: { href: UrlObject | Route<string>; text: string }[] = [
  { href: "/", text: "Home" },
  { href: "/projects", text: "Projects" },
  { href: "/me", text: "About Me" },
  { href: "/blog", text: "Blog" },
];
