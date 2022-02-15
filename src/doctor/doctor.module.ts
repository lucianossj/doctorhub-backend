import { Module } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { DoctorController } from './doctor.controller';
import { DoctorRepository } from './repository/doctor.repository';

@Module({
  controllers: [DoctorController],
  providers: [
    DoctorService,
    DoctorRepository
  ]
})
export class DoctorModule {}
