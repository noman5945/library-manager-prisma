import { Router } from "express";
import { bookController } from "./book.controller";

const route = Router();

route.post("/", bookController.addNewBook);
route.put("/:bookId", bookController.updateBookById);

export const bookRoutes = route;
