import express, { type Request, type Response } from "express";
import "dotenv/config";
import Openfort from "@openfort/openfort-node";

interface WebhookEvent {
	type: string;
	data: {
		id: string;
		[key: string]: unknown;
	};
}

const app = express();
const port = process.env.APP_PORT || "3001";

app.post(
	"/webhook/openfort",
	express.raw({ type: "application/json" }),
	async (req: Request, res: Response) => {
		const openfort = new Openfort(process.env.OPENFORT_API_KEY!, {
			basePath: process.env.OPENFORT_BASE_URL,
		});
		try {
			const signature = req.headers["openfort-signature"];
			if (typeof signature !== "string") {
				throw new Error("Missing or invalid openfort-signature header");
			}
			const event = await openfort.constructWebhookEvent<WebhookEvent>(
				req.body.toString(),
				signature,
			);
			console.info("Received webhook event:", event.type, event.data.id);
			res.status(200).send("OK");
		} catch (e) {
			console.error((e as Error).message);
			res.status(400).send("Invalid webhook");
		}
	},
);

app.listen(port, () => {
	console.info(`Server is running on http://localhost:${port}`);
});
