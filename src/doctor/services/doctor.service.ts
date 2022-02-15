import { Injectable } from '@nestjs/common';
import { CreateDoctorDto } from '../dto/create-doctor.dto';
import { UpdateDoctorDto } from '../dto/update-doctor.dto';
import { Doctor } from '../entities/doctor.entity';
import { DoctorRepository } from '../repository/doctor.repository';

@Injectable()
export class DoctorService {

  constructor(
    private repository: DoctorRepository
  ) {}

  public create(createDoctorDto: CreateDoctorDto): Promise<void> {
    return this.repository.create(createDoctorDto);
  }

  public findAll(): Promise<Doctor[]> {
    return this.repository.findAll();
  }

  public findOne(id: number): Promise<Doctor> {
    return this.repository.findOne(id);
  }

  public update(id: number, updateDoctorDto: UpdateDoctorDto): Promise<number> {
    return this.repository.update(id, updateDoctorDto);
  }

  public remove(id: number): Promise<number> {
    return this.repository.remove(id);
  }
}
