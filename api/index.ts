import app from "./src/app";
import config from "./src/config";
import "./src/db";

app.listen(config.PORT, () => {
  console.log(`Listening at http://localhost:${config.PORT}`);
});
