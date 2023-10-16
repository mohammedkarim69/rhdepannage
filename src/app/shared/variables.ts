import { Menu } from './interfaces/Menu';

export const URLAPI = 'http://localhost:8080/api';
export const NAVBAR_MENU: Menu[] = [
  {
    name: 'Accueil',
    routerLink: '/',
  },
  {
    name: 'Qui sommes-nous ?',
    routerLink: '/qui-sommes-nous',
  },
  {
    name: 'Gallerie Photos',
    routerLink: '/gallerie-photos',
  },
  {
    name: 'Services',
    routerLink: '/services',
  },
  {
    name: 'Nous contacter',
    routerLink: '/contact',
  },
];
