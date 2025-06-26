import { MenuItem } from '../types';

export const foodMenu: MenuItem[] = [
  {
    name: 'Tagliere di Salumi e Formaggi del Territorio',
    description: 'By Tommaso Salumi (Faicchio)',
    variants: [
      { size: 'PICCOLO', price: '8€' },
      { size: 'MEDIO', price: '12€' },
      { size: 'GRANDE', price: '16€' }
    ]
  },
  {
    name: 'Boulletes di Stagione',
    description: 'Su fonduta di caciocavallo del Matese 3pz',
    price: '7€'
  },
  {
    name: 'Tartare di Manzo',
    description: 'Con uovo in crosta e polvere di oliva caiazzana, condita con soia e olio 100g',
    price: '10€'
  },
  {
    name: 'Tartare di Salmone',
    description: '',
    price: '10€'
  },
  {
    name: 'Tartare di Tonno',
    description: '',
    price: '10€'
  },
  {
    name: 'Tartare di Gambero Rosa',
    description: '',
    price: '12€'
  },
  {
    name: 'Tartare di Gamberone',
    description: '',
    price: '12€'
  },
  {
    name: 'Tris di Mini Tartare',
    price: '15€'
  },
  {
    name: 'Poké del Matese',
    description: 'Riso Venere, avocado, mango, formaggio, noci e straccetti di pollo fritti',
    price: '12€'
  },
  {
    name: 'Tacos',
    description: 'Genovese di manzo e fonduta di pecorino',
    price: '5€'
  },
  {
    name: 'Minibun',
    description: 'Due con hamburger di chianina, insalata mista e fonduta di parmigiano. Due con pulled pork homemade, verdure croccanti e salsa Gorah',
    price: '15€'
  },
  {
    name: 'Chicken Royale Burger',
    description: 'Pollo fritto, maionese al bacon, cheddar, bacon e insalata',
    price: '10€'
  },
  {
    name: 'Friggy Bun',
    description: 'Panino con hamburger di scottona, provola, friggitelli con datterino rosso e maionese',
    price: '10€'
  },
  {
    name: 'Tagliata di Tonno in Crosta di Pistacchio',
    description: 'Con riduzione di soia',
    price: '16€'
  }
];