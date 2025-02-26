import { Request, Response } from "express";
import requestHandler from "../../utils/requestHandler";
import { memberServices } from "./member.service";
import sendResponse from "../../utils/sendResponse";

const createNewMember = requestHandler(async (req: Request, res: Response) => {
  const NewData = req.body;
  const result = await memberServices.createNewMember(NewData);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "New member created success fully!",
    data: result,
  });
});

const readAllMember = requestHandler(async (req: Request, res: Response) => {
  const result = await memberServices.readAllMembers();
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: "Members retrieved successfully",
    data: result,
  });
});

export const memberControllers = {
  createNewMember,
  readAllMember,
};
