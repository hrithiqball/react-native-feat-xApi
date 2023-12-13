import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3004;

app.use(bodyParser.json());

app.post("/xapi/statements", (req: Request, res: Response) => {
	const statement = req.body;
	console.log("Received xAPI statement: ", statement);

	res.status(200).send("Received xAPI statement successfully");
});

app.listen(port, () => {
	console.log(`xAPI endpoint listening at http://localhost:${port}`);
});
