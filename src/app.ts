import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send({ Message: "Library Management System is running." });
});

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(500).json({
    success: false,
    message: "API Not Found",
    error: {
      path: req.originalUrl,
      message: "This API does not exist.",
    },
  });
});

export default app;
