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
const readAllBooks = async (id?: string) => {
  if (id) {
    // If an ID is provided, use findUniqueOrThrow
    const result = await prisma.book.findUniqueOrThrow({
      where: { bookId: id },
    });
    return result;
  } else {
    // If no ID is provided, use findMany
    const result = await prisma.book.findMany();
    return result;
  }
};

const deleteBookbyId = async (id: string) => {
  await prisma.book.findUniqueOrThrow({ where: { bookId: id } });
  const result = await prisma.book.delete({ where: { bookId: id } });
  return result;
};

export const bookServices = {
  addNewBook,
  updateBookById,
  readAllBooks,
  deleteBookbyId,
};
