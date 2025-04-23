import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { HeartRateModule } from './heart-rate/heart-rate.module';

@Module({
  imports: [PatientsModule, HeartRateModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
