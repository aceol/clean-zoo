import * as express from 'express';
import {Application, Response, Request} from 'express';
import {myRouter} from './application/router';
import * as bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app: Application = express();

app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
  res.send('It\'s alive');
});

app.use('/zoo', myRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});