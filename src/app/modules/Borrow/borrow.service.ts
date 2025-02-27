import { BorrowBookRepo } from "../../repository/borrow.repository";
import { utilFuncs } from "../../utils/utilsFunc";

const borrowBookRepo = new BorrowBookRepo("borrowRecord");
const borrowBook = async (bookId: string, memeberId: string) => {
  const todayDate = new Date();
  const returnDate = null;
  return borrowBookRepo.borrowBooks(bookId, memeberId, returnDate, todayDate);
};

const returnBook = async (borrowId: string) => {
  const todayDate = new Date();
  return borrowBookRepo.returnBooks(borrowId, todayDate);
};

const checkOverDues = async () => {
  return borrowBookRepo.checkOverdues();
};

export const borrowService = {
  borrowBook,
  returnBook,
  checkOverDues,
};
