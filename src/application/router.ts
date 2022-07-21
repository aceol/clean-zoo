import { Router, Request, Response } from 'express';
import Animal from '../domain/entities/Animal'
import { seeAnimals } from '../domain/use-cases/seeAnimals';
import { seeOneAnimal } from '../domain/use-cases/seeOneAnimal';
import { serialize } from './serializers/animalSerialize';
import { serializeAll } from './serializers/animalSerialize';

const zoo: Animal[] = [new Animal('lapin'), new Animal('canard'), new Animal('hippopotame'), new Animal('chien')]

export const myRouter =  Router();
myRouter.get('/', (req: Request, res: Response) => {
  return res.json(serializeAll(seeAnimals(zoo)));
});

myRouter.get('/:id', (req: Request, res: Response) => {
  const index = parseInt(req.params.id, 10);
  return res.json(serialize(seeOneAnimal(zoo, index)));
});