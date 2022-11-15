import { Module } from '@nestjs/common';
import { TelegrafModule } from 'nestjs-telegraf';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TelegrafModule.forRoot({
      token: 'token',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
