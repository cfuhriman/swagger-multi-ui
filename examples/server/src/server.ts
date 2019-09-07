import app from "./app";
const PORT = 3000;
import { ENVIRONMENT } from "./conf/secrets";
app.listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});