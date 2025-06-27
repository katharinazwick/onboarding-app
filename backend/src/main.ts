import { NestFactory } from "@nestjs/core";
import { NestExpressApplication } from "@nestjs/platform-express";
import { AppModule } from "src/app.module";
import helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.use(
    helmet({
      crossOriginResourcePolicy: {
        policy: "cross-origin",
      },
    })
  );

  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: [
      "Content-Type",
      "Authorization",
      "CSRF-Token",
      "Cache-Control",
      "Set-Cookie",
    ],
  });

  await app.listen(4000);
}

bootstrap();
