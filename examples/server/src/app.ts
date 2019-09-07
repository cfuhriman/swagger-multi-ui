// src/app.ts
import { Router, Request, Response, NextFunction } from "express";
import * as express from "express";
import * as bodyParser from "body-parser";
import { ApiRouting } from "./routes";

class App {

    public app: express.Application;
    private router: express.Router;
    constructor() {
        this.app = express();
        this.router = express.Router();
        this.config();
    }

    private config(): void {

        this.app.use(bodyParser.json({ limit: "10mb" }));
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(express.static(`${__dirname}/../public`));
        // trusting repo
        this.app.use(express.static(`${__dirname}/../node_modules/@cfuhriman/swagger-multi-ui/dist`));
        this.configureRoutes();
    }


    private configureRoutes() {
      this.app.use(function (req: Request, res: Response, next: NextFunction) {
        for (const key in req.query) {
          if (key) {
            req.query[key.toLowerCase()] = req.query[key];
          }
        }
        next();
      });
      ApiRouting.ConfigureRouters(this.app);
    }

}

export default new App().app;