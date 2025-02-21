import { Request, Response } from "express";
import { bookServices } from "./book.service";
import { BookType } from "./book.interface";
import sendResponse from "../../utils/sendResponse";

const addNewBook = async (req: Request, res: Response) => {
  const bookData: BookType = req.body;
  try {
    const result = await bookServices.addNewBook(bookData);
    sendResponse(res, {
      success: true,
      statusCode: 200,
      message: "Book created success fully!",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: true,
      statusCode: 200,
      message: "Error! Something went wrong.",
      error: error,
    });
  }
};

export const bookController = {
  addNewBook,
};
