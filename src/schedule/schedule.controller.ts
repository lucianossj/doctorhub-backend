import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Schedule } from './entities/schedule.entity';

@Controller('schedule')
export class ScheduleController {
  constructor(private readonly scheduleService: ScheduleService) {}

  @Post()
  public create(@Body() createScheduleDto: CreateScheduleDto): Promise<void> {
    return this.scheduleService.create(createScheduleDto);
  }

  @Get()
  public findAll(): Promise<Schedule[]> {
    return this.scheduleService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Schedule> {
    return this.scheduleService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto): Promise<number> {
    return this.scheduleService.update(+id, updateScheduleDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<number> {
    return this.scheduleService.remove(+id);
  }
}