import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

router.post("/borrow", borrowController.borrowBook);
router.post("/return", borrowController.returnBook);

export const borrowBookRoutes = router;
