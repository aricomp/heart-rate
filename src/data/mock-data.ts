import * as data from './patients-mock-data.json';
import {PatientDto}  from '../patients/patient.dto';
import {HeartRateDto}  from '../heart-rate/heart-rate.dto';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';


export async function loadPatientsMockData()
{
 const rawPatients = data.patients;
 const patients = plainToInstance(PatientDto, rawPatients);

  const errors = await validate(patients[0]);
  if (errors.length) {
    console.error('Validation failed:', errors);
  }
  return patients;
}

export async function loadHeartRatesMockData()
{

const rawHeartRateReadings = data.heartRateReadings;
 const heartRates = plainToInstance(HeartRateDto, rawHeartRateReadings);
  const errors = await validate(heartRates[0]);
  if (errors.length) {
    console.error('Validation failed:', errors);
  }
  return heartRates;
}

