// This file is used to create the express app and export it to be used in other files.

import express from "express";
import cors from "cors";

import errorHandler from "./adapters/http/middleware/Errorhandler";

export const app = express();

app.use(cors());

// error errorHandler
app.use(errorHandler);
