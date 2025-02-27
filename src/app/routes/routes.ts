import { Router } from "express";
import { routesArray } from "../globalTypes/routesObject";
import { bookRoutes } from "../modules/Book/book.routes";
import { memberRoutes } from "../modules/Member/member.routes";
import { borrowBookRoutes } from "../modules/Borrow/borrow.route";

const moduleRouter = Router();
const moduleRoutes: routesArray = [
  { path: "/books", route: bookRoutes },
  { path: "/member", route: memberRoutes },
  { path: "/", route: borrowBookRoutes },
];

moduleRoutes.forEach((route) => {
  moduleRouter.use(route.path, route.route);
});

export default moduleRouter;
