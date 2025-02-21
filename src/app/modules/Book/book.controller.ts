import { Request, Response } from "express";
import { bookServices } from "./book.service";
import { BookType } from "./book.interface";
import sendResponse from "../../utils/sendResponse";
import requestHandler from "../../utils/requestHandler";

const addNewBook = requestHandler(async (req: Request, res: Response) => {
  const bookData: BookType = req.body;
  const result = await bookServices.addNewBook(bookData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book created success fully!",
    data: result,
  });
});

export const bookController = {
  addNewBook,
};
