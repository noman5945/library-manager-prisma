import { GenericRepository } from "../../repository/generic.repository";

const memberRepository = new GenericRepository("member", "memberId");
const createNewMember = async (data: any) => {
  return await memberRepository.createNewData(data);
};

const readAllMembers = async () => {
  return await memberRepository.read();
};

const readMemberById = async (memberId: string) => {
  return await memberRepository.read(memberId);
};

const deleteMemberbyId = async (memberId: string) => {
  return await memberRepository.delete(memberId);
};

const updateMemberInfoById = async (memberId: string, updateData: any) => {
  return await memberRepository.update(memberId, updateData);
};
export const memberServices = {
  createNewMember,
  readAllMembers,
  readMemberById,
  deleteMemberbyId,
  updateMemberInfoById,
};
