import { Router } from "express";
import { bookController } from "./book.controller";

const route = Router();

route.post("/", bookController.addNewBook);
route.put("/:bookId", bookController.updateBookById);
route.get("/", bookController.readAllBooks);
route.get("/:bookId", bookController.readBookId);
route.delete("/:bookId", bookController.deleteBookbyId);

export const bookRoutes = route;
