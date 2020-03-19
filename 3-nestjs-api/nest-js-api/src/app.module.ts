import { Module } from '@nestjs/common';
import { DatabaseModule } from './environment/database/database.module';
import { ControllerModule } from './api/controllers/controller.module';

@Module({
  imports: [DatabaseModule, ControllerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
