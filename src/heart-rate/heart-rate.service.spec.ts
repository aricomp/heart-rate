import { Test, TestingModule } from '@nestjs/testing';
import { HeartRateService } from './heart-rate.service';

describe('HeartRateService', () => {
  let service: HeartRateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HeartRateService],
    }).compile();

    service = module.get<HeartRateService>(HeartRateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
