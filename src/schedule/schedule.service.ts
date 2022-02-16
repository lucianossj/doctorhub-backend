import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { ScheduleRepository } from './repository/schedule.repository';

@Injectable()
export class ScheduleService {

  constructor(
    private repository: ScheduleRepository
  ) {}

  public create(createScheduleDto: CreateScheduleDto): Promise<void> {
    return this.repository.create(createScheduleDto);
  }

  public findAll(): Promise<Schedule[]> {
    return this.repository.findAll();
  }

  public findOne(id: number): Promise<Schedule> {
    return this.repository.findOne(id);
  }

  public update(id: number, updatePatientDto: UpdateScheduleDto): Promise<number> {
    return this.repository.update(id, updatePatientDto);
  }

  public remove(id: number): Promise<number> {
    return this.repository.remove(id);
  }
}
