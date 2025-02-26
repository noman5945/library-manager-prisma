import { GenericRepository } from "../../repository/generic.repository";

const memberRepository = new GenericRepository("member", "memberId");
const createNewMember = async (data: any) => {
  return await memberRepository.createNewData(data);
};

const readAllMembers = async () => {
  return await memberRepository.read();
};

export const memberServices = {
  createNewMember,
  readAllMembers,
};
