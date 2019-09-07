import { Router, Request, Response, NextFunction } from "express";
import { SwaggerController } from "./controller/swagger.controller";

export class ApiRouting {
  public router: Router = Router();
  constructor() {

  }
    public static ConfigureRouters(app: Router) {

        app.use("/", new SwaggerController().router);
        app.use(function(req, res, next) {
          return res.status(404).send({ message: `Route ${req.url} Not found.` });
        });
    }
}


