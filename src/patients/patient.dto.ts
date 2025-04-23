import { IsString, IsInt } from 'class-validator';

export class PatientDto {
  @IsString()
  id: string;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  gender: string;
}