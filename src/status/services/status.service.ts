import { Injectable } from '@nestjs/common';
import { Status } from '../entities/status.entity';
import { StatusRepository } from '../repository/status.repository';

@Injectable()
export class StatusService {

  constructor(
    private repository: StatusRepository
  ) {}

  public findAll(): Promise<Status[]> {
    return this.repository.findAll();
  }

  public findOne(id: number): Promise<Status> {
    return this.repository.findOne(id);
  }

}
