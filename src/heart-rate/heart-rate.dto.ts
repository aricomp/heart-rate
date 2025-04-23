import { IsString, IsInt, IsDateString } from 'class-validator';

export class HeartRateDto {
  @IsString()
  patientId: string;

  @IsDateString()
  timestamp: string;

  @IsInt()
  heartRateReading: number;
}