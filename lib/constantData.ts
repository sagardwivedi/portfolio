import { Route } from 'next';
import { UrlObject } from 'url';

export const navs: { href: UrlObject | Route<string>; text: string }[] = [
  { href: '/', text: 'Home' },
  { href: '/me', text: 'About Me' },
  { href: '/projects', text: 'Projects' },
  { href: '/blog', text: 'Blog' },
];
