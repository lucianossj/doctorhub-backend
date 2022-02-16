import { Module } from '@nestjs/common';
import { StatusRepository } from './repository/status.repository';
import { StatusService } from './services/status.service';
import { SpecialtyController } from './status.controller';

@Module({
  controllers: [SpecialtyController],
  providers: [
    StatusService,
    StatusRepository
  ]
})
export class StatusModule {}
