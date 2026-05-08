import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { recipeRouter } from './routes/recipe';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.use('/recipes', recipeRouter);

app.get('/', (req, res) => {
  res.json({ message: 'Recipe API is running' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
