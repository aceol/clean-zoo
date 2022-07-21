import { Router, Request, Response } from 'express';
import { seeAnimals } from '../domain/use-cases/seeAnimals';
import { seeOneAnimal } from '../domain/use-cases/seeOneAnimal';
import { get,getAll } from '../infrastructure/repositories/animalRepository';
import { serialize } from './serializers/animalSerialize';
import { serializeAll } from './serializers/animalSerialize';

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  return res.json(serializeAll(seeAnimals(getAll)));
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const index = parseInt(req.params.id, 10);
  return res.json(serialize(seeOneAnimal(get, index)));
});