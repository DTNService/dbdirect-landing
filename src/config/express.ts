import express, {Request, Response, NextFunction, ErrorRequestHandler} from 'express';
import bodyParser from "body-parser";
import config from "./vars";
import logger from 'morgan';
import path from 'path';

const app = express();

//MARK: BodyParser 더이상 사용되지않음
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// view engine setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '..', '..', 'public/')));

// catch 404 and forward to error handler

// error handler
app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log('ERROR!');
  
  // render the error page
  res.status(err.status || 500);
});

app.get('/', (req: Request, res: Response) => { 
  res.sendFile(__dirname + '/index.html');
});

export default app;
