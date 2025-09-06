// this is the entry point of the application

import { createapp } from './app';
import { CONFIG } from './interface/config';

const app = createapp();

app.listen(CONFIG.PORT, () => {
  console.log(`server running in http://localhost:${CONFIG.PORT}`);
});
