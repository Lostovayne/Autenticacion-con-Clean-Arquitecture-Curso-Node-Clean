import { envs } from "./config";
import { AppRoutes } from "./presentation/routes";
import Server from "./presentation/server";

(() => {
    main();
})();

async function main() {
    // todo: await base de datos

    // todo: iniciar servidor
    const port = Number(envs.PORT);
    const server = new Server({ port, routes: AppRoutes.routes });
    server.start();
}
