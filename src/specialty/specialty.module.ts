import { Module } from '@nestjs/common';
import { SpecialtyRepository } from './repository/specialty.repository';
import { SpecialtyService } from './services/specialty.service';
import { SpecialtyController } from './specialty.controller';

@Module({
  controllers: [SpecialtyController],
  providers: [
    SpecialtyService,
    SpecialtyRepository
  ]
})
export class SpecialtyModule {}
