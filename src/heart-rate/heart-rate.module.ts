import { Module } from '@nestjs/common';
import { HeartRateService } from './heart-rate.service';
import { HeartRateController } from './heart-rate.controller';

@Module({
  providers: [HeartRateService],
  controllers: [HeartRateController],
})
export class HeartRateModule {}
