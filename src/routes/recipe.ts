import { Router, Request, Response } from 'express';
import { recipes, Recipe } from '../models/recipe';

export const recipeRouter = Router();

// GET all recipes
recipeRouter.get('/', (req: Request, res: Response) => {
  res.json(recipes);
});

// GET recipe by id
recipeRouter.get('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const recipe = recipes.find((r) => r.id === id);

  if (!recipe) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  res.json(recipe);
});

// POST create recipe
recipeRouter.post('/', (req: Request, res: Response) => {
  const { name, ingredients, instructions } = req.body;

  if (!name || !ingredients || !instructions) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  const newRecipe: Recipe = {
    id: recipes.length + 1,
    name,
    ingredients,
    instructions,
  };

  recipes.push(newRecipe);
  res.status(201).json(newRecipe);
});

// DELETE recipe
recipeRouter.delete('/:id', (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const index = recipes.findIndex((r) => r.id === id);

  if (index === -1) {
    return res.status(404).json({ message: 'Recipe not found' });
  }

  recipes.splice(index, 1);
  res.status(204).send();
});
