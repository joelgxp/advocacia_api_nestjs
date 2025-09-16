import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Habilitar CORS para desenvolvimento
  app.enableCors();
  
  // Definir prefixo global para todas as rotas
  app.setGlobalPrefix('api');
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  
  console.log(`🚀 Aplicação rodando em: http://localhost:${port}/api`);
}
bootstrap();
