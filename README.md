# Swagger Multi UI

## INFO
Serve multiple swagger ui instances on a single page applicate.  Designed to be embedded as an npm module in other projects

## USAGE
================
### Adding library project
Example for expressjs
- install:
    ```javascript
    npm install --save cfuhriman/swagger-multi-ui
    ```
- Add javascript and stylesheet to project
    > Option 1: Add the dist folder as static assets directy.  Example using expressjs:
    ```javascript
    app.use(express.static(`${__dirname}/../node_modules/@cfuhriman/swagger-multi-ui/dist`));
    ```

    > Option 2: use a bundler and use as static assets.  Example using parcelJs and expressjs:
    ```javascript
        # swagger-ui-multi.js
        import 'cfuhriman/swagger-multi-ui/dist/index.css';
        require("cfuhriman/swagger-multi-ui");
    ```
    ```javascript
        # expressjs app.js
        app.use(express.static(`${__dirname}/../dist`));  // or whatever folder the bundler exports to
    ```


    ```
### HTML
- reference the files in your html file (change names according to your option)
    ```html
    <html>
    <head>
        ...
        <link href="/swagger-ui-multi.css" rel="stylesheet">
    </head>
    <body>
        <noscript>
        You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
        <script src="/swagger-ui-multi.js"></script>
    </html>
    ```

### ROUTES
- Render the html file under the route that makes sense to your project setup, e.g., in express you can use it as your base route by placing it in the public static folder as index.html, or use a rendering engine such as handlebars or pug

- create route "/api-definitions" that returns a json response in same format as the example below.  The url references the endpoint that serves the swagger definition and can be hosted on the same server or a remote url.
   ```javascript
   const definitions = {
            "name": "xxxx API Suite",
            "description": "For..",
            "landingImage": "/images/cpm-logo.png",
            "logo": "/images/cpm-logo.png",
            "apis": [
                {
                    "name": "My API 1",
                    "url": "/api-1"
                },
                {
                    "name": "My API 2",
                    "url": "/api-2"
                },
                {
                    "name": "My API 3",
                    "url": "/api-3"
                }
            ]
        };

    apt.get('/api-definitions', (req, res) => {
        res.json(definitions);
    })
    ```

## REFERENCE
This project was inspired by the starter template from nWright https://github.com/nate01776/swaggerhub-doc-portal


## Want to contribute?
Pull requests welcome.   Areas of known need include:
- UI enhancements
- Improvements to React code (not a React developer)
- Improvements to example, or additional examples