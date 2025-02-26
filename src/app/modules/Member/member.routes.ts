import { Router } from "express";
import { memberControllers } from "./member.controller";

const router = Router();

router.post("/", memberControllers.createNewMember);
router.get("/", memberControllers.readAllMember);

export const memberRoutes = router;
