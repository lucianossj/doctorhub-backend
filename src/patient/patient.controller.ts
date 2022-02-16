import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreatePatientDto } from './dto/create-patient.dto';
import { UpdatePatientDto } from './dto/update-patient.dto';
import { Patient } from './entities/patient.entity';
import { PatientService } from './services/patient.service';

@Controller('patient')
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post()
  public create(@Body() createPatientDto: CreatePatientDto): Promise<void> {
    return this.patientService.create(createPatientDto);
  }

  @Get()
  public findAll(): Promise<Patient[]> {
    return this.patientService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Patient> {
    return this.patientService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updatePatientDto: UpdatePatientDto): Promise<number> {
    return this.patientService.update(+id, updatePatientDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<number> {
    return this.patientService.remove(+id);
  }
}
