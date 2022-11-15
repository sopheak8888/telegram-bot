import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: '5345290078:AAEEZ6HCy-p8QGLM0m2OEYjCxtQHnq_d7Qk',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
