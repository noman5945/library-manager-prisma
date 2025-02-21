import { Router } from "express";

export type routesObject = {
  path: string;
  route: Router;
};

export type routesArray = routesObject[];
