import { Router, Request, Response, NextFunction } from "express";
import { SwaggerController } from "./controller/swagger.controller";

export class ApiRouting {
  public router: Router = Router();
  constructor() {

  }
    public static ConfigureRouters(app: Router) {

        app.use("/", new SwaggerController().router);

        /***
         * A non-root route can also be used.  Trailing hash middleware is needed
         *
         * import * as expressTrailingSlash from "express-trailing-slash";
         * app.use("/api/", [expressTrailingSlash({slash: true}), new SwaggerController().router]);
         *
         ***/

        app.use(function(req, res, next) {
          return res.status(404).send({ message: `Route ${req.url} Not found.` });
        });
    }
}


