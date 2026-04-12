import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  server: {
    VITE_MEILISEARCH_HOST: z.string().url(),
    MEILISEARCH_ADMIN_KEY: z.string().min(1),
    VITE_MEILISEARCH_INDEX_NAME: z.string().default("docs"),
  },
  runtimeEnv: process.env,
});
