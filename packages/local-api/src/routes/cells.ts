import express from 'express';
import fs from 'fs/promises';
import path from 'path';
interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code ';
}
export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    // Make sure the cell storage file exists
    // If the file doesn't exist, add in a default list of cells
    // Read the file
    // Parse the list of cells out of it
    // Send the list of cells to browser
  });

  router.post('/cells', async (req, res) => {
    // Take the list of cells from the req obj
    // Serialize them
    const { cells }: { cells: Cell[] } = req.body;

    // Write the cells into the file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });

  return router;
};
