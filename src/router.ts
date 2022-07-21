import { Router, Request, Response } from 'express';
import Animal from './domain/entities/Animal'

const zoo: Animal[] = [new Animal('lapin'), new Animal('canard')]

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  return res.json(zoo.map((animal: Animal): String => animal+''));
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const data = zoo[parseInt(req.params.id, 10)];
  return res.json(data);
});