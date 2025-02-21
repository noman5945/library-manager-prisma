import { Router } from "express";
import { routesArray } from "../globalTypes/routesObject";
import { bookRoutes } from "../modules/Book/book.routes";

const moduleRouter = Router();
const moduleRoutes: routesArray = [{ path: "/books", route: bookRoutes }];

moduleRoutes.forEach((route) => {
  moduleRouter.use(route.path, route.route);
});

export default moduleRouter;
