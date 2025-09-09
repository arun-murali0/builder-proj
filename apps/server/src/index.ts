// this is the entry point of the application
import { app } from "@/app";
import { CONFIG } from "@/interface/config";

app.listen(CONFIG.PORT, () => {
  console.log(`server running in http://localhost:${CONFIG.PORT}`);
});
