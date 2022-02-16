import { Module } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { ScheduleController } from './schedule.controller';
import { ScheduleRepository } from './repository/schedule.repository';

@Module({
  controllers: [ScheduleController],
  providers: [
    ScheduleService,
    ScheduleRepository
  ]
})
export class ScheduleModule {}
