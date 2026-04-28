import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  // ✅ Mock user middleware (VERY IMPORTANT)
  app.use((req: any, res, next) => {
    req.user = {
      id: 1,
      role: 'ADMIN',
      country: 'INDIA',
    };
    next();
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();