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
    name: 'Carpaccio Black Angus',
    description: 'Su letto di rucola, scaglie di parmigiano e zest di limone 150g',
    price: '12€'
  },
  {
    name: 'Boulletes di Stagione',
    description: 'Su fonduta di caciocavallo del Matese 3pz',
    price: '7€'
  },
  {
    name: 'Tartare di Manzo',
    description: 'Con uovo in crosta e polvere di oliva caiazzana, condita con soia e olio 100g',
    price: '8€'
  },
  {
    name: 'Tartare di Salmone',
    description: 'Con burrata, zest di arancia e sale Maldini 100g',
    price: '10€'
  },
  {
    name: 'Tartare di Tonno',
    description: '100g',
    price: '10€'
  },
  {
    name: 'Tartare di Gambero Rosso',
    description: '100g',
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
    name: 'Tagliata di Tonno in Crosta di Pistacchio',
    description: 'Con riduzione di soia',
    price: '16€'
  }
];