import { Injectable,OnModuleInit } from '@nestjs/common';
import { loadHeartRatesMockData } from '../data/mock-data';
import {HeartRateDto}  from './heart-rate.dto';

@Injectable()
export class HeartRateService implements OnModuleInit {
  private heartRates: HeartRateDto[] = [];

  //Load MockData
  async onModuleInit() {
    this.heartRates = await loadHeartRatesMockData();
  }

  //Get High Heart Rates - above 100
  getHighHeartRateEvents() {
    return this.heartRates.filter((r) => r.heartRateReading > 100);
  }

  //Get Analytics(Avg,Max,Min) 
  getAnalytics(patientId: string, from: string, to: string) {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    const readings = this.heartRates.filter(
      (r) =>
        r.patientId === patientId &&
        new Date(r.timestamp) >= fromDate &&
        new Date(r.timestamp) <= toDate,
    );

    const values = readings.map((r) => r.heartRateReading);
    if (values.length === 0) return { avg: 0, max: 0, min: 0 };

    const sum = values.reduce((a, b) => a + b, 0);
    return {
      avg: sum / values.length,
      max: Math.max(...values),
      min: Math.min(...values),
    };
  }
}
