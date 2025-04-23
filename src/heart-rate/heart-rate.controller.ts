import { Controller, Get, Query } from '@nestjs/common';
import { HeartRateService } from './heart-rate.service';

@Controller('heart-rate')
export class HeartRateController {
  constructor(private readonly heartRateService: HeartRateService) {}

  @Get('high')
  getHighHeartRateEvents() {
    return this.heartRateService.getHighHeartRateEvents();
  }

  @Get('analytics')
  getAnalytics(
    @Query('patientId') patientId: string,
    @Query('from') from: string,
    @Query('to') to: string,
  ) {
    return this.heartRateService.getAnalytics(patientId, from, to);
  }
}
