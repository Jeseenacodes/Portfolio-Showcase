import express, { type Express } from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req: unknown) {
        const r = req as { id?: string | number; method?: string; url?: string };
        return {
          id: r.id,
          method: r.method,
          url: typeof r.url === "string" ? r.url.split("?")[0] : r.url,
        };
      },
      res(res: unknown) {
        const r = res as { statusCode: number };
        return {
          statusCode: r.statusCode,
        };
      },
    },
  }),
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
