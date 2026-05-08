import request from 'supertest';
import app from '../src/index';

describe('Recipe API', () => {
  describe('GET /recipes', () => {
    it('should return all recipes', async () => {
      const response = await request(app).get('/recipes');
      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
    });
  });

  describe('GET /recipes/:id', () => {
    it('should return a recipe by id', async () => {
      const response = await request(app).get('/recipes/1');
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id', 1);
    });

    it('should return 404 if recipe not found', async () => {
      const response = await request(app).get('/recipes/999');
      expect(response.status).toBe(404);
    });
  });

  describe('POST /recipes', () => {
    it('should create a new recipe', async () => {
      const newRecipe = {
        name: 'Test Recipe',
        ingredients: ['ingredient1', 'ingredient2'],
        instructions: 'Mix and cook.',
      };

      const response = await request(app).post('/recipes').send(newRecipe);
      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty('name', 'Test Recipe');
    });

    it('should return 400 if fields are missing', async () => {
      const response = await request(app).post('/recipes').send({ name: 'Incomplete' });
      expect(response.status).toBe(400);
    });
  });

  describe('DELETE /recipes/:id', () => {
    it('should return 404 for non-existent recipe', async () => {
      const response = await request(app).delete('/recipes/999');
      expect(response.status).toBe(404);
    });
  });
});
