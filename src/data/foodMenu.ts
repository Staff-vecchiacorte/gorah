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
    name: 'Tartare di Gambero',
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
    name: 'Bianco Matese',
    type: 'Vino Bianco',
    price: '30€',
    description: 'Un percorso dedicato a sapori delicati e raffinati, perfetti con un vino bianco fresco e minerale.',
    courses: [
      {
        dish: 'Carpaccio di Black Angus',
        description: 'Sul letto di rucola, scaglie di parmigiano e zest di limone.',
        wine: {
          name: 'Falanghina del Sannio DOC',
          notes: 'Note agrumate e freschezza equilibrata.'
        }
      },
      {
        dish: 'Tartare di Salmone',
        description: 'Con burrata, zest di arancia e sale Maldon.',
        wine: {
          name: 'Greco di Tufo DOCG',
          notes: 'Elegante, con spiccate note floreali e di frutta bianca.'
        }
      },
      {
        dish: 'Tris di Flan Multigusto',
        description: 'Un piatto ricco di sapori delicati ma aromatici.',
        wine: {
          name: 'Pecorino Abruzzo DOC',
          notes: 'Morbido e avvolgente, con accenti minerali.'
        }
      }
    ]
  },
  {
    name: 'Tramonto dal Matese',
    type: 'Bollicine',
    price: '30€',
    description: 'Un percorso vivace e frizzante, abbinato a piatti freschi e saporiti.',
    courses: [
      {
        dish: 'Tris di Mini Tartare',
        description: 'Manzo, salmone e gamberi per un\'esperienza varia e sofisticata.',
        wine: {
          name: 'Metodo Classico Brut Campania',
          notes: 'Bollicine eleganti, con note di crosta di pane e agrumi.'
        }
      },
      {
        dish: 'Pokè del Matese',
        description: 'Una reinterpretazione del pokè, ricca di sapori locali.',
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
  {
    name: 'La Notte del Matese',
    type: 'Rosso',
    price: '40€',
    description: 'Un percorso dai sapori intensi e decisi, accompagnato da un vino rosso corposo.',
    courses: [
      {
        dish: 'Boulettes di Stagione',
        description: 'Su fonduta di caciocavallo del Matese.',
        wine: {
          name: 'Aglianico del Taburno DOCG',
          notes: 'Strutturato e vellutato, con note di spezie e frutti rossi.'
        }
      },
      {
        dish: 'Tartare di Manzo',
        description: 'Con uovo in crosta e polvere di oliva caiazzana.',
        wine: {
          name: 'Taurasi DOCG',
          notes: 'Robusto e complesso, con accenti di tabacco e ciliegie mature.'
        }
      },
      {
        dish: 'Vellutata di Ceci',
        description: 'Con crostini dorati e olio evo caiazzano.',
        wine: {
          name: 'Montepulciano d\'Abruzzo DOC',
          notes: 'Morbido e armonioso, con note di prugna e spezie.'
        }
      }
    ]
  }
];