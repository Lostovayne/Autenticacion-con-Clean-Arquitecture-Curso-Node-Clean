import { get } from "env-var";

export const envs = {
    PORT: get("PORT").required().default("3100").asPortNumber(),
};
