import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { Specialty } from './entities/specialty.entity';
import { SpecialtyService } from './services/specialty.service';

@Controller('specialty')
export class SpecialtyController {
  constructor(private readonly specialtyService: SpecialtyService) {}

  @Get()
  public findAll(): Promise<Specialty[]> {
    return this.specialtyService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Specialty> {
    return this.specialtyService.findOne(+id);
  }

}
