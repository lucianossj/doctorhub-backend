import { Injectable } from '@nestjs/common';
import { Specialty } from '../entities/specialty.entity';
import { SpecialtyRepository } from '../repository/specialty.repository';

@Injectable()
export class SpecialtyService {

  constructor(
    private repository: SpecialtyRepository
  ) {}

  public findAll(): Promise<Specialty[]> {
    return this.repository.findAll();
  }

  public findOne(id: number): Promise<Specialty> {
    return this.repository.findOne(id);
  }

}
