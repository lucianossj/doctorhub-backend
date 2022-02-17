import { Injectable } from '@nestjs/common';

import { InjectKnex, Knex } from 'nestjs-knex';

import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { LoginDoctorDto } from '../dto/login-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { Doctor } from '../entities/doctor.entity';

@Injectable()
export class DoctorRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex
  ) {}

  public login(login: LoginDoctorDto): Promise<Doctor> {
    return this.knex.select(
      'd.code',
      'd.fullname',
      'd.username',
      'd.password',
      's.description as specialty',
      's.code as specialtyCode')
    .from('doctor as d')
    .joinRaw('INNER JOIN specialty as s ON d.specialty = s.code')
    .where('d.username', '=', login.username)
    .andWhere('d.password', '=', login.password)
    .first();
  }

  public create(createDoctorDto: CreateDoctorDto): Promise<void> {
    return this.knex.insert(createDoctorDto)
      .into('doctor');
  }

  public findAll(): Promise<Doctor[]> {
    return this.knex.select(
      'd.code',
      'd.fullname',
      'd.username',
      'd.password',
      's.description as specialty',
      's.code as specialtyCode')
    .from('doctor as d')
    .joinRaw('INNER JOIN specialty as s ON d.specialty = s.code');
  }

  public findOne(id: number): Promise<Doctor> {
    return this.knex.select(
        'd.code',
        'd.fullname',
        'd.username',
        'd.password',
        's.description as specialty')
      .from('doctor as d')
      .joinRaw('INNER JOIN specialty as s ON d.specialty = s.code')
      .where('d.code', '=', id)
      .first();
  }

  public update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<number> {
    return this.knex.update(updateDoctorDto)
      .from('doctor')
      .where('code', '=', id);
  }

  public remove(id: number): Promise<number> {
    return this.knex.delete()
      .from('doctor')
      .where('code', '=', id);
  }
}
