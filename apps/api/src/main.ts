import "reflect-metadata";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Later (LR4): enable CORS for web ↔ api requests
  app.enableCors({
    origin: true,
    credentials: true,
  });

  await app.listen(5000);
  // eslint-disable-next-line no-console
  console.log("API running on http://localhost:5000");
}

bootstrap();
