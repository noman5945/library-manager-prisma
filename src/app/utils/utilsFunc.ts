const calculateReturnDate = (borrowedDate: Date): Date => {
  // Create a new Date object to avoid mutating the original borrowedDate
  const returnDate = new Date(borrowedDate);

  // Add 14 days to the borrowedDate
  returnDate.setDate(returnDate.getDate() + 14);

  return returnDate;
};

export const utilFuncs = {
  calculateReturnDate,
};
