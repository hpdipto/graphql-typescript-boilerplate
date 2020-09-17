import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello TS");
});

const PORT: number = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
