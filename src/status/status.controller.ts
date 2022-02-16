import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Status } from './entities/status.entity';
import { StatusService } from './services/status.service';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @Get()
  public findAll(): Promise<Status[]> {
    return this.statusService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Status> {
    return this.statusService.findOne(+id);
  }

}
