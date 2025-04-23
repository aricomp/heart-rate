import { Injectable,OnModuleInit } from '@nestjs/common';
import { loadPatientsMockData } from '../data/mock-data';
import {PatientDto}  from '../patients/patient.dto';

@Injectable()
export class PatientsService implements OnModuleInit {
  private requestCounts: Record<string, number> = {};
  private patients: PatientDto[] = [];

  //Load MockData
  async onModuleInit() {
    this.patients = await loadPatientsMockData();
  }

  //Get Patient details
  getPatient(patientId: string) {
    const patient = this.patients.find((p) => p.id === patientId);
    if(patient) //Only increase the count if it is a valid patientID;
        this.requestCounts[patientId] = (this.requestCounts[patientId] || 0) + 1;
    return patient;
  }

  //Get # of Requests per patient
  getRequestCounts() {
    return this.requestCounts;
  }
}
