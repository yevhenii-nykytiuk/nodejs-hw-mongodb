import { startServer } from "../src/server.js";
import { initMongoDB } from "../src/db/initMongoDB.js";

const bootstrap = async () => {
  await initMongoDB();
  startServer();
};

bootstrap();

