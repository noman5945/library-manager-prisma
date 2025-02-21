import { PrismaClient } from "@prisma/client";
import { BookType } from "./book.interface";

const prisma = new PrismaClient();

const addNewBook = async (bookData: BookType) => {
  const result = await prisma.book.create({ data: bookData });
  return result;
};

export const bookServices = {
  addNewBook,
};
