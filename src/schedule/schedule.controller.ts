import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './services/schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';
import { ScheduleResponse } from './integration/schedule.response';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  public create(@Body() createScheduleDto: CreateScheduleDto): Promise<void> {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  public findAll(): Promise<ScheduleResponse[]> {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<ScheduleResponse> {
    return this.scheduleService.findOne(+id);
  }

  @Get('/doctor/:id')
  public findByDoctor(@Param('id') id: string): Promise<ScheduleResponse[]> {
    return this.scheduleService.findByDoctor(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto): Promise<number> {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @Patch('cancel/:id')
  public cancelSchedule(@Param('id') id: string): Promise<number> {
    return this.scheduleService.cancelSchedule(+id);
  }

  @Patch('finish/:id')
  public finishSchedule(@Param('id') id: string): Promise<number> {
    return this.scheduleService.finishSchedule(+id);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<number> {
    return this.scheduleService.remove(+id);
  }
}
