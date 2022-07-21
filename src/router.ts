import { Router, Request, Response } from 'express';

const zoo: String[] = ['lapin', 'canard']

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  res.json(zoo);
});

myRouter.post('/', (req: Request, res: Response) => {
  const animal = req.body;
  const data = zoo.push(animal);
  return res.json(data);
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const data = zoo[parseInt(req.params.id, 10)];
  return res.json(data);
});