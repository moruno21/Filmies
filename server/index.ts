import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

class Server {
  public app: Application;

  constructor() {
    this.app = express();
    this.config();
    this.routes();
  }

  config(): void {
    // this.app.set('port', process.env.PORT || 3000); //In case there is a predefined port
    // this.app.use(express.urlencoded({ extended: false })); //In case we use html forms
    this.app.set('port', 3000);
    this.app.use(morgan('dev')); //Shows in terminal the requests made
    this.app.use(cors()); //Allows Angular to make requests to our server
    this.app.use(express.json()); //Accepts and understands json format
  }

  routes(): void {}

  start(): void {
    this.app.listen(this.app.get('port'));
    console.log('Server on port', this.app.get('port'));
  }
}

const server = new Server();
server.start();
