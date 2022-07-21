import { Router, Request, Response } from 'express';
import { seeAnimals } from '../domain/use-cases/seeAnimals';
import { seeOneAnimal } from '../domain/use-cases/seeOneAnimal';
import { animalRepository } from '../infrastructure/repositories/animalRepository';
import { serialize } from './serializers/animalSerialize';
import { serializeAll } from './serializers/animalSerialize';

const test = new animalRepository;

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  return res.json(serializeAll(seeAnimals(test)));
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const index = parseInt(req.params.id, 10);
  return res.json(serialize(seeOneAnimal(test, index)));
});