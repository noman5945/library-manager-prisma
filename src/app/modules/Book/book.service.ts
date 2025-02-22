import { PrismaClient } from "@prisma/client";
import { BookType } from "./book.interface";

const prisma = new PrismaClient();

const addNewBook = async (bookData: BookType) => {
  const result = await prisma.book.create({ data: bookData });
  return result;
};

const updateBookById = async (updateData: any, id: string) => {
  await prisma.book.findUniqueOrThrow({ where: { bookId: id } });
  const result = await prisma.book.update({
    where: { bookId: id },
    data: updateData,
  });
  return result;
};

export const bookServices = {
  addNewBook,
  updateBookById,
};
