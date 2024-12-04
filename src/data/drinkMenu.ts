import { DrinkMenuItem } from '../types';

export const signatureDrinks: DrinkMenuItem[] = [
  {
    name: 'Marilyn Monroe',
    description: 'Bitter Campari, Punt e Mes, cherry bitters, ciliegia al maraschino',
    price: '8€'
  },
  {
    name: 'New Fashioned',
    description: 'Whiskey cannella, zucchero, chocolate bitters',
    price: '8€'
  },
  {
    name: 'BaRomy',
    description: 'Rum invecchiato, liquore alla banana, sciroppo passion fruit, succo di limone fresco, albume pastorizzato',
    price: '8€'
  },
  {
    name: 'Tiramisù Scomposto',
    description: 'Bayles, kahlúa, espresso, vodka, savoiardo',
    price: '8€'
  },
  {
    name: 'Winter Daiquiri',
    description: 'Frangelico, rum bianco, succo di limone fresco, sciroppo di zucchero, albume pastorizzato',
    price: '8€'
  },
  {
    name: 'Croccantissimo',
    description: 'Whiskey bourbon, succo di limone fresco, sciroppo di zucchero, sciroppo al pop corn, albume pastorizzato',
    price: '8€'
  },
  {
    name: 'Violetta Spritz',
    description: 'Liquore alla violetta, prosecco, soda',
    price: '6€'
  },
  {
    name: 'Limoncello Spritz 2.0',
    description: 'Limoncello, liquore bergamotto, succo di limone fresco, prosecco, soda',
    price: '6€'
  },
  {
    name: 'Sparrow',
    description: 'Tris di rum perfettamente bilanciato, succo di lime fresco, sciroppo di zucchero, angostura bitters, Ginger beer',
    price: '8€'
  },
  {
    name: 'Il Pippotto',
    description: 'Shochu, liquore al bergamotto, passion fruit, succo di limone fresco, albume pastorizzato, affiancato con uno short di prosecco',
    price: '10€'
  },
  {
    name: 'Gorah',
    description: 'Vodka liscia, liquore alla violetta, lamponi pestati freschi, succo di limone, albume pastorizzato',
    price: '10€'
  }
];

export const classicDrinks: DrinkMenuItem[] = [
  {
    name: 'Negroni',
    description: 'Bitter Campari, Sweet Vermouth, Gin',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 4,
      taste: 4,
      calories: '180 kcal'
    }
  },
  {
    name: 'Americano',
    description: 'Bitter Campari, Sweet Vermouth, soda',
    price: '7€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 3,
      calories: '120 kcal'
    }
  },
  {
    name: 'Negroni Sbagliato',
    description: 'Bitter Campari, Sweet Vermouth, bollicina',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 4,
      calories: '140 kcal'
    }
  },
  {
    name: 'Milano Torino',
    description: 'Campari Bitter, Sweet Vermouth',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 3,
      calories: '140 kcal'
    }
  },
  {
    name: 'Aperol Spritz',
    description: 'Aperol, Prosecco, soda',
    price: '5€',
    ratings: {
      intensity: 2,
      aroma: 3,
      taste: 3,
      calories: '120 kcal'
    }
  },
  {
    name: 'Campari Spritz',
    description: 'Campari Bitter, Prosecco, soda',
    price: '5€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 3,
      calories: '140 kcal'
    }
  },
  {
    name: 'Dry Martini',
    description: 'Dry Vermouth, Gin',
    price: '7€',
    ratings: {
      intensity: 5,
      aroma: 3,
      taste: 4,
      calories: '160 kcal'
    }
  },
  {
    name: 'Vodka Martini',
    description: 'Vodka, Dry Vermouth',
    price: '7€',
    ratings: {
      intensity: 5,
      aroma: 3,
      taste: 3,
      calories: '150 kcal'
    }
  },
  {
    name: 'Old Fashioned',
    description: 'Whiskey Bourbon, zucchero, angostura bitters',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 3,
      taste: 4,
      calories: '180 kcal'
    }
  },
  {
    name: 'Paloma',
    description: 'Tequila, succo di lime, soda al pompelmo rosa',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 4,
      calories: '120 kcal'
    }
  },
  {
    name: 'Daiquiri',
    description: 'Rum Bianco, succo di lime, sciroppo di zucchero',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 5,
      calories: '140 kcal'
    }
  },
  {
    name: 'Moscow Mule',
    description: 'Vodka, Ginger beer, succo di lime',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 3,
      taste: 4,
      calories: '140 kcal'
    }
  },
  {
    name: 'Last Word',
    description: 'Gin, Chartreuse verde, liquore maraschino, succo di lime fresco',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 4,
      taste: 5,
      calories: '160 kcal'
    }
  },
  {
    name: 'Boulevardier',
    description: 'Whiskey Bourbon, Campari Bitter, Sweet Vermouth',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 4,
      taste: 4,
      calories: '190 kcal'
    }
  },
  {
    name: 'Clover Club',
    description: 'Gin, sciroppo di lamponi, succo di limone fresco, albume pastorizzato',
    price: '7€',
    ratings: {
      intensity: 3,
      aroma: 4,
      taste: 5,
      calories: '170 kcal'
    }
  },
  {
    name: 'Manhattan',
    description: 'Rye Whiskey, Sweet Vermouth, angostura bitters',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 4,
      taste: 4,
      calories: '170 kcal'
    }
  },
  {
    name: 'Margarita',
    description: 'Tequila, Triple Sec, succo di lime fresco',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 3,
      taste: 4,
      calories: '150 kcal'
    }
  },
  {
    name: 'Mojito',
    description: 'Rum chiaro, succo di lime fresco, zucchero, menta fresca, soda',
    price: '7€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 5,
      calories: '120 kcal'
    }
  },
  {
    name: 'Sazerac',
    description: 'Cognac, assenzio, zucchero, Peychaud\'s bitters',
    price: '7€',
    ratings: {
      intensity: 5,
      aroma: 4,
      taste: 4,
      calories: '180 kcal'
    }
  },
  {
    name: 'White Lady',
    description: 'Gin, Triple Sec, succo di limone fresco',
    price: '7€',
    ratings: {
      intensity: 4,
      aroma: 3,
      taste: 4,
      calories: '150 kcal'
    }
  },
  {
    name: 'Hugo',
    description: 'Liquore fiore di sambuco, prosecco, menta fresca, soda',
    price: '6€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 3,
      calories: '120 kcal'
    }
  }
];

export const nonAlcoholicDrinks: DrinkMenuItem[] = [
  {
    name: 'Red Sunrise',
    description: 'Succo mirtillo, granatina, passion fruit, soda rosa',
    price: '5€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 4,
      calories: '110 kcal'
    }
  },
  {
    name: 'Tropical Mule',
    description: 'Lime pestato, zucchero di canna, passion fruit, Ginger beer',
    price: '5€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 5,
      calories: '130 kcal'
    }
  },
  {
    name: 'Coconut Breeze',
    description: 'Succo ananas, cocco, succo di lime',
    price: '5€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 5,
      calories: '150 kcal'
    }
  },
  {
    name: 'Strawberry Sunset',
    description: 'Succo arancia, fragola, soda al limone',
    price: '5€',
    ratings: {
      intensity: 1,
      aroma: 4,
      taste: 4,
      calories: '120 kcal'
    }
  },
  {
    name: 'Green Mojito',
    description: 'Lime pestato, menta fresca, zucchero di canna, soda',
    price: '5€',
    ratings: {
      intensity: 2,
      aroma: 4,
      taste: 5,
      calories: '90 kcal'
    }
  }
];

export const whiteWines: DrinkMenuItem[] = [
  {
    name: 'Anthilia bianco DOC',
    description: 'Donna Fugata 2022, 75 cl',
    price: '22€'
  },
  {
    name: 'Falanghina vendemmia tardiva IGT',
    description: 'Roccamonfina v.t. Telaro 2023, 75 cl',
    price: '20€'
  },
  {
    name: 'Fiano e greco',
    description: 'A-mano 2022, 75 cl',
    price: '15€'
  },
  {
    name: 'Fiano delle cinque pietre IGT',
    description: 'Roccamonfina 2023, 75 cl',
    price: '20€'
  },
  {
    name: 'Greco delle cinque pietre IGT',
    description: 'Roccamonfina 75 cl',
    price: '20€'
  },
  {
    name: 'Sauvignon DOC festival',
    description: 'Cantina Meran 2022, 75 cl',
    price: '20€'
  },
  {
    name: 'Gewurztraminer DOC',
    description: 'Cantina Meran 2023, 75 cl',
    price: '22€'
  },
  {
    name: 'Pinot bianco festival',
    description: 'Cantina Meran 2022, 75 cl',
    price: '18€'
  },
  {
    name: 'Chardonnay DOC',
    description: 'Meran 2023, 75 cl',
    price: '18€'
  },
  {
    name: 'Neviere Roccamonfina IGT',
    description: 'Telaro 2023, 75 cl',
    price: '30€'
  },
  {
    name: 'Passerina IGT',
    description: 'Villa Medoro 2023, 75 cl',
    price: '15€'
  },
  {
    name: 'Pecorino IGT',
    description: 'Villa Medoro 2023, 75 cl',
    price: '15€'
  },
  {
    name: 'Pallagrello bianco',
    description: 'Due Fiumi Telaro 2023, 75 cl',
    price: '23€'
  }
];

export const redWines: DrinkMenuItem[] = [
  {
    name: 'Terre baciate Syrah',
    description: '75 cl',
    price: '15€'
  },
  {
    name: 'Rosso di Montalcino DOC',
    description: 'Fattoria dei Barbi 2019, 75 cl',
    price: '26€'
  },
  {
    name: 'Ripassa',
    description: 'Zenato 2019, 75 cl',
    price: '38€'
  },
  {
    name: 'Primitivo IGT',
    description: 'Posta Piana 2020, 75 cl',
    price: '18€'
  },
  {
    name: 'Primitivo di manduria DOC',
    description: 'Lirica 2021, 75 cl',
    price: '18€'
  },
  {
    name: 'Negroamaro IGT',
    description: 'Posta Piana 2020, 75 cl',
    price: '16€'
  },
  {
    name: 'Montepulciano Mammut DOC',
    description: '75 cl',
    price: '28€'
  },
  {
    name: 'Montepulciano d’Abruzzo DOC',
    description: 'Villa Medoro 2020, 75 cl',
    price: '15€'
  },
  {
    name: 'Calivierno rosso IGT',
    description: 'Roccamonfina Telaro 2021, 75 cl',
    price: '30€'
  },
  {
    name: 'Brunello di Montalcino DOCG',
    description: 'Fattoria dei Barbi 2017, 75 cl',
    price: '65€'
  },
  {
    name: 'Bariletta rosso IGT',
    description: 'Roccamonfina Telaro, 75 cl',
    price: '20€'
  },
  {
    name: 'Ara mundi Galluccio DOC rosso riserva',
    description: 'Telaro 2019, 75 cl',
    price: '30€'
  },
  {
    name: 'Amarone',
    description: 'Zenato 2018, 75 cl',
    price: '85€'
  }
];

export const sparklingWines: DrinkMenuItem[] = [
  {
    name: 'Prosecco DOCG brut',
    description: 'Borgo Molino, 75 cl',
    price: '18€'
  },
  {
    name: 'Prosecco DOCG extra dry',
    description: 'Borgo Molino, 75 cl',
    price: '18€'
  },
  {
    name: 'Franciacorta Bibbi',
    description: '75 cl',
    price: '40€'
  },
  {
    name: 'Mala Femmena vino spumante brut rosato',
    description: 'Telaro, 75 cl',
    price: '20€'
  },
  {
    name: 'Tefrite vino spumante brut bianco',
    description: 'Telaro, 75 cl',
    price: '19€'
  }
];