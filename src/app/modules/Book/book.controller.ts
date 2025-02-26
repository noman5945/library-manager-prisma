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

const updateBookById = requestHandler(async (req: Request, res: Response) => {
  const bookId = req.params.bookId;

  const updateBody = req.body;
  const result = await bookServices.updateBookById(
    updateBody,
    bookId as string
  );
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book updated success fully!",
    data: result,
  });
});

const readAllBooks = requestHandler(async (req: Request, res: Response) => {
  const result = await bookServices.readAllBooks();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Books retrieved successfully",
    data: result,
  });
});

const readBookId = requestHandler(async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const result = await bookServices.readAllBooks(id);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book retrieved successfully",
    data: result,
  });
});

const deleteBookbyId = requestHandler(async (req: Request, res: Response) => {
  const id = req.params.bookId;
  const result = await bookServices.deleteBookbyId(id);
  res.status(200).json({
    success: true,
    statusCode: 200,
    message: "Book successfully deleted",
  });
});

export const bookController = {
  addNewBook,
  updateBookById,
  readAllBooks,
  readBookId,
  deleteBookbyId,
};
