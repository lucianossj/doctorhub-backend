import { Controller, Get, Post, Body, Patch, Param, Delete, Catch } from '@nestjs/common';
import { DoctorService } from './services/doctor.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';
import { DoctorResponse } from './integration/doctor.response';
import { LoginDoctorDto } from './dto/login-doctor.dto';

@Controller('doctor')
export class DoctorController {
  constructor(
    private doctorService: DoctorService
  ) {}

  @Post('/login')
  public login(@Body() login: LoginDoctorDto): Promise<DoctorResponse> {
    return this.doctorService.login(login);
  }

  @Post()
  public create(@Body() createDoctorDto: CreateDoctorDto): Promise<void> {
    return this.doctorService.create(createDoctorDto);
  }

  @Get()
  public findAll(): Promise<DoctorResponse[]> {
    return this.doctorService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id') id: string): Promise<Doctor> {
    return this.doctorService.findOne(+id);
  }

  @Patch(':id')
  public update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto): Promise<number> {
    return this.doctorService.update(+id, updateDoctorDto);
  }

  @Delete(':id')
  public remove(@Param('id') id: string): Promise<number> {
    return this.doctorService.remove(+id);
  }
}
