import { MenuItem, DegustationMenu } from '../types';

export const antipasti: MenuItem[] = [
  {
    name: 'Tagliere di Salumi e Formaggi del Territorio',
    description: 'By tomaso salumi (FAICCHIO)',
    variants: [
      { size: 'PICCOLO', price: '7€' },
      { size: 'MEDIO', price: '10€' },
      { size: 'GRANDE', price: '15€' }
    ]
  },
  {
    name: 'Carpaccio di Black Angus',
    description: 'Sul letto di rucola, scaglie di parmigiano e zest di limone (150g)',
    price: '12€'
  },
  {
    name: 'Boulettes di Stagione',
    description: 'Su fonduta di caciocavallo del Matese (3pz)',
    price: '7€'
  }
];

export const tartare: MenuItem[] = [
  {
    name: 'Tartare di Manzo',
    description: 'Con uovo in crosta e polvere di oliva caiazzana, condita con soia e olio (150g)',
    price: '8€'
  },
  {
    name: 'Tartare di Salmone',
    description: 'Con burrata, zest di arancia e sale maldon (150g)',
    price: '10€'
  },
  {
    name: 'Tartare di Tonno',
    price: '10€'
  },
  {
    name: 'Tris di Mini Tartare',
    description: 'A scelta',
    price: '15€'
  }
];

export const specialita: MenuItem[] = [
  {
    name: 'Tris di Flan Multigusto',
    price: '10€'
  },
  {
    name: 'Pokè del Matese',
    price: '8€'
  },
  {
    name: 'Vellutata di Ceci',
    description: 'Con crostini dorati e olio evo caiazzano',
    price: '6€'
  }
];

export const degustazioni: DegustationMenu[] = [
  
  {
    name: 'Tramonto del Matese',
    type: 'Bollicine',
    price: '30€',
    description: 'Un percorso vivace e frizzante, abbinato a piatti freschi e saporiti.',
    courses: [
      {
        dish: 'Tris di Mini Tartare',
        description: 'Manzo, salmone e tonno per un\'esperienza varia e sofisticata.',
        wine: {
          name: 'Metodo Classico Brut Campania',
          notes: 'Bollicine eleganti, con note di crosta di pane e agrumi.'
        }
      },
      {
        dish: 'Selezione di salumi',
        description: 'By tomaso salumi (FAICCHIO)',
        wine: {
          name: 'Prosecco Superiore DOCG',
          notes: 'Fruttato e delicatamente frizzante.'
        }
      },
      {
        dish: 'Boulettes di Stagione',
        description: 'Su fonduta di caciocavallo del Matese.',
        wine: {
          name: 'Franciacorta Brut DOCG',
          notes: 'Equilibrato, con una freschezza agrumata.'
        }
      }
    ]
  },
  
];