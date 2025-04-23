import { Controller, Get, Param } from '@nestjs/common';
import { PatientsService } from './patients.service';

@Controller('patients')
export class PatientsController {
  constructor(private readonly patientsService: PatientsService) {}

  @Get(':id')
  getPatient(@Param('id') id: string) {
    return this.patientsService.getPatient(id);
  }

  @Get()
  getRequestCounts() {
    return this.patientsService.getRequestCounts();
  }
}
