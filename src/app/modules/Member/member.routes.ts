import { Router } from "express";
import { memberControllers } from "./member.controller";

const router = Router();

router.post("/", memberControllers.createNewMember);
router.get("/", memberControllers.readAllMember);
router.get("/:memberId", memberControllers.readMemeberById);
router.put("/:memberId", memberControllers.updateMemeberById);
router.delete("/:memberId", memberControllers.deleteMemeberById);

export const memberRoutes = router;
