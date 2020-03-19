import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

const SwaggerSetup = (nestApp: INestApplication) => {
  const options = new DocumentBuilder()
    .setTitle('NodeJs IDEMIA Training API')
    .setDescription('IDEAMIA Training API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(nestApp, options);
  SwaggerModule.setup('api', nestApp, document);
};

export default SwaggerSetup;
