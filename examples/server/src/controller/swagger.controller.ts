import { Router, Request, Response, NextFunction } from "express";

const swaggerJSDoc = require("swagger-jsdoc");
const swaggerFolder = `${__dirname}/../../swagger-docs`;
const getSwaggerSpecs = (title, files: string[] = []) => {
    const baseFiles = ["shared-schemas"];
    let apis: string[];
    if (files.length) {
        apis = [...baseFiles, ...files].map(x => `${swaggerFolder}/${x}.yml`);
    } else {
        apis = [
            `${swaggerFolder}/**/*.yml`,
        ];
    }

    const swaggerDefinition = {
        openapi: "3.0.1",
        info: {
            title, // Title of the documentation
            version: "1.0.0", // Version of the app
            description: "API resources", // short description of the app
        },
        host: "/", // the host or url of the app
        basePath: "/api", // the basepath of your endpoint

    };
    const options = {
        swaggerDefinition,
        apis
    };
    const swaggerSpec = swaggerJSDoc(options);
    return swaggerSpec;

};

export class SwaggerController {
    public router: Router = Router();
    constructor() {
        this.router.get("/api-definitions", this.apis);
        this.router.get("/example-1", this.example1);
        this.router.get("/example-2", this.example2);
        this.router.get("/example-3", this.example3);
    }
    public example1(req: Request, res: Response) {
        res.send(getSwaggerSpecs("Example 1", ["auth-client", "example1"]));
    }
    public example2(req: Request, res: Response) {
        res.send(getSwaggerSpecs("Example 2", ["auth-user", "example2"]));
    }
    public example3(req: Request, res: Response) {
        res.send(getSwaggerSpecs("Example 3", ["auth-basic", "example3"]));
    }

    public apis(req: Request, res: Response) {
        const data = {
            "name": "My Org - API Documentation",
            "description": "For use by My Org",
            "landingImage": "/images/generic-logo.png",
            "logo": "/images/generic-logo-text.png",
            "apis": [
                {
                    "name": "Example 1",
                    "url": "/example-1"
                },
                {
                    "name": "Example 2",
                    "url": "/example-2"
                },
                {
                    "name": "Example 3",
                    "url": "/example-3"
                },
                {
                    "name": "Example External",
                    "url": "https://petstore.swagger.io/v2/swagger.json"
                },
            ]
        };
        res.json(data);
    }

}

