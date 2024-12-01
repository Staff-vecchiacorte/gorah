export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  variants?: {
    size: string;
    price: string;
  }[];
}

export interface DrinkMenuItem extends MenuItem {
  ratings?: {
    intensity: number;
    aroma: number;
    taste: number;
    calories: string;
  };
}

export interface DegustationMenu {
  name: string;
  type: string;
  price: string;
  description: string;
  courses: {
    dish: string;
    description: string;
    wine: {
      name: string;
      notes: string;
    };
  }[];
}