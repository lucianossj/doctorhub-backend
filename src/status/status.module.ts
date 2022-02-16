import { Module } from '@nestjs/common';
import { StatusRepository } from './repository/status.repository';
import { StatusService } from './services/status.service';
import { StatusController } from './status.controller';

@Module({
  controllers: [StatusController],
  providers: [
    StatusService,
    StatusRepository
  ]
})
export class StatusModule {}
