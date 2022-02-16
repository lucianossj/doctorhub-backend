import { Injectable } from '@nestjs/common';

import { InjectKnex, Knex } from 'nestjs-knex';
import { CreatePatientDto } from '../dto/create-patient.dto';
import { UpdatePatientDto } from '../dto/update-patient.dto';
import { Patient } from '../entities/patient.entity';

@Injectable()
export class PatientRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex
  ) {}

  public create(createPatientDto: CreatePatientDto): Promise<void> {
    return this.knex.insert(createPatientDto)
      .into('patient');
  }

  public findAll(): Promise<Patient[]> {
    return this.knex.select('*')
    .from('patient');
  }

  public findOne(id: number): Promise<Patient> {
    return this.knex.select('*')
      .from('patient')
      .where('code', '=', id)
      .first();
  }

  public update(id: number, updatePatientDto: UpdatePatientDto): Promise<number> {
    return this.knex.update(updatePatientDto)
      .from('patient')
      .where('code', '=', id);
  }

  public remove(id: number): Promise<number> {
    return this.knex.delete()
      .from('patient')
      .where('code', '=', id);
  }
}
