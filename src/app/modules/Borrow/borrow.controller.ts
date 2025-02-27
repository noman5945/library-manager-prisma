import { Request, Response } from "express";
import requestHandler from "../../utils/requestHandler";
import { borrowService } from "./borrow.service";
import sendResponse from "../../utils/sendResponse";

const borrowBook = requestHandler(async (req: Request, res: Response) => {
  const { bookId, memberId } = req.body;
  const result = await borrowService.borrowBook(bookId, memberId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book borrowed successfully",
    data: result,
  });
});

const returnBook = requestHandler(async (req: Request, res: Response) => {
  const { borrowId } = req.body;
  const result = await borrowService.returnBook(borrowId);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Book returned successfully",
    data: result,
  });
});

const checkOverDues = requestHandler(async (req: Request, res: Response) => {
  const result = await borrowService.checkOverDues();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Overdue borrow list fetched",
    data: result,
  });
});

export const borrowController = {
  borrowBook,
  returnBook,
  checkOverDues,
};
