import { Module } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import connectionDb from './db/config';

@Module({
  imports: [
    ApiModule,
    connectionDb,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
