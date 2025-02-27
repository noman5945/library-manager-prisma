import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class BorrowBookRepo<T> {
  private model: keyof typeof prisma;

  constructor(model: keyof typeof prisma) {
    this.model = model;
  }

  async borrowBooks(
    bookId: string,
    memberId: string,
    returnDate: Date | null,
    borrowDate: Date
  ): Promise<T> {
    const newBorrowData = {
      bookId,
      memberId,
      returnDate,
      borrowDate,
    };
    return (prisma[this.model] as any).create({
      data: newBorrowData,
      select: {
        borrowId: true,
        bookId: true,
        memberId: true,
        borrowDate: true,
      },
    });
  }

  async returnBooks(borrowId: string, returnDate: Date) {
    return (prisma[this.model] as any).update({
      data: { returnDate },
      where: { borrowId },
    });
  }

  async checkOverdues() {}
}
