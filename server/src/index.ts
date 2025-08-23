// this is the entry point of the application

import { app } from "./app";
import { CONFIG } from "./config";

app.listen(CONFIG.PORT, () => {
  console.log("server running......");
});
