import { Router, Request, Response } from 'express';
import Animal from './domain/entities/Animal'
import { seeAnimals } from './domain/use-cases/seeAnimals';

const zoo: Animal[] = [new Animal('lapin'), new Animal('canard'), new Animal('hippopotame')]

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  return res.json(seeAnimals(zoo));
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const data = zoo[parseInt(req.params.id, 10)];
  return res.json(data);
});