import { Module } from '@nestjs/common';
import { PatientController } from './patient.controller';
import { PatientRepository } from './repository/patient.repository';
import { PatientService } from './services/patient.service';

@Module({
  controllers: [PatientController],
  providers: [
    PatientService,
    PatientRepository
  ]
})
export class PatientModule {}
