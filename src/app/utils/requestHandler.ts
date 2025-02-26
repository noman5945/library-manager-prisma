import { NextFunction, Request, RequestHandler, Response } from "express";

const requestHandler = (fn: RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (error) {
      res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Error! Something went wrong.",
        error: error,
      });
    }
  };
};

export default requestHandler;
