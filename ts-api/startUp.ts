import * as express from "express";
import * as bodyParser from "body-parser";

import * as cors from "cors";
import * as compression from "compression";


import Database from "./infra/db";
import NewsController from "./controller/newsController";

class StartUp {

  public app: express.Application;
  //private _db: Database;

  constructor() {
    this.app = express();
    //  this._db = new Database();
    Database.createConnection();
    this.middler();
    this.routes();
  }

  enableCors() {
    const options: cors.CorsOptions = {
      allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
      credentials: true,
      methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
      origin: '*',
      preflightContinue: false
    };

    this.app.use(cors(options));
  }


  middler() {
    this.enableCors();
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(compression())
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({ versao: "0.0.1" });
    });

    //new
    this.app.route("/api/v1/news").get(NewsController.get);
    this.app.route("/api/v1/news/:id").get(NewsController.getById);
    this.app.route("/api/v1/news").post(NewsController.create);
    this.app.route("/api/v1/news/:id").put(NewsController.update);
    this.app.route("/api/v1/news/:id").delete(NewsController.delete);

  }
}

export default new StartUp();
