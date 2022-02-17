import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from '../dto/create-schedule.dto';
import { UpdateScheduleDto } from '../dto/update-schedule.dto';
import { Schedule } from '../entities/schedule.entity';
import { ScheduleResponse } from '../integration/schedule.response';
import { ScheduleMapper } from '../mappers/schedule.mapper';
import { ScheduleRepository } from '../repository/schedule.repository';

@Injectable()
export class ScheduleService {

  constructor(
    private repository: ScheduleRepository
  ) {}

  public create(createScheduleDto: CreateScheduleDto): Promise<void> {
    return this.repository.create(createScheduleDto);
  }

  public findAll(): Promise<ScheduleResponse[]> {
    return this.repository.findAll()
      .then(entity => ScheduleMapper.mapEntitiesArrayToResponse(entity));
  }

  public findOne(id: number): Promise<ScheduleResponse> {
    return this.repository.findOne(id)
      .then(entity => ScheduleMapper.mapEntityToResponse(entity));
  }

  public findByDoctor(id: number): Promise<ScheduleResponse[]> {
    return this.repository.findByDoctor(id)
      .then(entity => ScheduleMapper.mapEntitiesArrayToResponse(entity));
  }

  public update(id: number, updatePatientDto: UpdateScheduleDto): Promise<number> {
    return this.repository.update(id, updatePatientDto);
  }

  public remove(id: number): Promise<number> {
    return this.repository.remove(id);
  }

  public cancelSchedule(id: number): Promise<number> {
    return this.repository.cancelSchedule(id);
  }

  public finishSchedule(id: number): Promise<number> {
    return this.repository.finishSchedule(id);
  }
}
