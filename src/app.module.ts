import { Dependencies, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { campaignModule } from './campaign/campaign.module';
//import { config } from 'process';
import { Connection } from 'typeorm';
import config from 'ormconfig';

@Dependencies(Connection)
@Module({
  imports: [ TypeOrmModule.forRoot(config),campaignModule
  
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
