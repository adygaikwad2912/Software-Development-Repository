export interface Recipe {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string;
}

export const recipes: Recipe[] = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    ingredients: ['spaghetti', 'minced beef', 'tomato sauce', 'onion', 'garlic'],
    instructions: 'Cook the spaghetti. Fry the beef with onion and garlic. Add tomato sauce. Serve together.',
  },
  {
    id: 2,
    name: 'Chicken Curry',
    ingredients: ['chicken', 'curry paste', 'coconut milk', 'onion', 'garlic'],
    instructions: 'Fry the onion and garlic. Add curry paste. Add chicken and cook through. Add coconut milk and simmer.',
  },
];
