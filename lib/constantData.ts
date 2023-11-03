import { Route } from "next";
import { UrlObject } from "url";

export const navs: { href: UrlObject | Route<string>; text: string }[] = [
  { href: "/projects", text: "Projects" },
  { href: "/me", text: "About Me" },
  { href: "/contact", text: "Contact" },
  { href: "/blog", text: "Blog" },
];
