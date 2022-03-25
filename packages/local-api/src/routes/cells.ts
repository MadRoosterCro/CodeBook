import express from 'express';

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get('/cells', async (req, res) => {
    // Make sure the cell storage file exists
    // If the file doesn't exist, add in a default list of cells
    // Read the file
    // Parse the list of cells out of it
    // Send the list of cells to browser
  });

  router.post('/cells', async (req, res) => {
    // Make sure the file exists
    // If not, create it
    // Take the list of cells from the req obj
    // Serialize them
    // Write the cells into the file
  });

  return router;
};
