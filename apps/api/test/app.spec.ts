import { Test } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import { INestApplication } from "@nestjs/common";
import request from "supertest";

describe("AppController (e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it("/health (GET)", async () => {
    await request(app.getHttpServer())
      .get("/health")
      .expect(200)
      .expect(({ body }) => {
        expect(body.ok).toBe(true);
      });
  });
});
