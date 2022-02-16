import { Injectable } from '@nestjs/common';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Patient } from '../entities/patient.entity';
import { PatientRepository } from '../repository/patient.repository';

@Injectable()
export class PatientService {

  constructor(
    private repository: PatientRepository
  ) {}

  public create(createPatientDto: CreatePatientDto): Promise<void> {
    return this.repository.create(createPatientDto);
  }

  public findAll(): Promise<Patient[]> {
    return this.repository.findAll();
  }

  public findOne(id: number): Promise<Patient> {
    return this.repository.findOne(id);
  }

  public update(id: number, updatePatientDto: UpdatePatientDto): Promise<number> {
    return this.repository.update(id, updatePatientDto);
  }

  public remove(id: number): Promise<number> {
    return this.repository.remove(id);
  }
}
