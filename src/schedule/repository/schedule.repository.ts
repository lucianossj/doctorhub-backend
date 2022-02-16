
import { Injectable } from '@nestjs/common';

import { InjectKnex, Knex } from 'nestjs-knex';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';
import { Schedule } from '../entities/schedule.entity';

@Injectable()
export class ScheduleRepository {

  constructor(
    @InjectKnex() private readonly knex: Knex
  ) {}

  public create(createScheduleDto: CreateScheduleDto): Promise<void> {
    return this.knex.insert(createScheduleDto)
      .into('schedule');
  }

  public findAll(): Promise<Schedule[]> {
    return this.knex.select(
        'sch.date',
        'sch.hour',
        'st.description as status',
        'sp.description as specialty',
        'd.fullname as doctor',
        'p.fullname as patient'
    )
    .joinRaw('INNER JOIN status as st ON sch.status = st.code')
    .joinRaw('INNER JOIN specialty as sp ON sch.specialty = sp.code')
    .joinRaw('INNER JOIN doctor as d ON sch.doctor = d.code')
    .joinRaw('INNER JOIN patient as p ON sch.patient = p.code')
    .from('schedule as sch');
  }

  public findOne(id: number): Promise<Schedule> {
    return this.knex.select(
        'sch.date',
        'sch.hour',
        'st.description as status',
        'sp.description as specialty',
        'd.fullname as doctor',
        'p.fullname as patient'
    )
    .joinRaw('INNER JOIN status as st ON sch.status = st.code')
    .joinRaw('INNER JOIN specialty as sp ON sch.specialty = sp.code')
    .joinRaw('INNER JOIN doctor as d ON sch.doctor = d.code')
    .joinRaw('INNER JOIN patient as p ON sch.patient = p.code')
    .from('schedule as sch')
    .where('sch.code', '=', id)
    .first();
  }

  public update(id: number, updatePatientDto: UpdateScheduleDto): Promise<number> {
    return this.knex.update(updatePatientDto)
      .from('schedule')
      .where('code', '=', id);
  }

  public remove(id: number): Promise<number> {
    return this.knex.delete()
      .from('schedule')
      .where('code', '=', id);
  }
}