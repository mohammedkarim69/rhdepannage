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
export const SENDGRID_API_KEY='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'
