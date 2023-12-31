import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";
import httpStatus from "http-status";
import routes from "./app/routes";
import globalErrorHandlers from "./app/middlewares/globalErrorHandler";
import cookieParser from "cookie-parser";
const app: Application = express();

// Middleware

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main directories
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to the Book Verse");
});

// application routes
app.use("/", routes);

//global error handler
app.use(globalErrorHandlers);

// handle not found route
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: "Not found",
    errorMessage: [
      {
        path: req.originalUrl,
        message: "Api Not Found",
      },
    ],
  });
  next();
});

export default app;
