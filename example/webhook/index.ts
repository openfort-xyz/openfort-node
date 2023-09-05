import express, { Request, Response } from 'express';
import * as dotenv from "dotenv";
import Openfort from "@openfort/openfort-node";

dotenv.config();
const app = express();
const port = getEnvVariable("APP_PORT");

app.post('/webhook/openfort', express.raw({ type: "application/json" }), async (req: Request, res: Response) => {
  console.log(req.headers)
  const openfort = new Openfort(getEnvVariable("OPENFORT_APIKEY"), process.env.OPENFORT_BASEURL);
  const event = await openfort.constructWebhookEvent(req.body.toString(), req.headers["openfort-signature"]);
  console.log(event.data.id);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

function getEnvVariable(name: string): string {
  const result = process.env[name];
  if (!result) {
      throw Error(`Environment variable is missing: ${name}`);
  }
  return result;
}
