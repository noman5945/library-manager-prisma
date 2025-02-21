import { Router } from "express";
import { bookController } from "./book.controller";

const route = Router();

route.post("/", bookController.addNewBook);

export const bookRoutes = route;
