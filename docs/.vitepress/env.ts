import { createEnv } from "@t3-oss/env-core";
import { z } from "zod";

export const env = createEnv({
  clientPrefix: "VITE_",
  client: {
    VITE_MEILISEARCH_HOST: z.string().url().optional(),
    VITE_MEILISEARCH_SEARCH_KEY: z.string().optional(),
    VITE_MEILISEARCH_INDEX_NAME: z.string().default("docs"),
  },
  runtimeEnv: import.meta.env,
});
