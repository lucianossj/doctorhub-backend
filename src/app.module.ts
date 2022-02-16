import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KnexModule } from 'nestjs-knex';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DoctorModule } from './doctor/doctor.module';
import { PatientModule } from './patient/patient.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    DoctorModule,
    TypeOrmModule.forRootAsync({
      useFactory: async (configService: ConfigService) => ({
          type: 'mysql',
          host: configService.get<string>('DB_HOST'),
          port: configService.get<number>('DB_PORT'),
          username: configService.get<string>('DB_USER'),
          password: configService.get<string>('DB_PASS'),
          database: configService.get<string>('DB_NAME'),
          timezone: 'utc+3',
          entities: ["dist/**/*.entity{.ts,.js}"],
          synchronize: false,
      }),
      inject: [ConfigService]
  }),
  KnexModule.forRootAsync({
    useFactory: async (configService: ConfigService) => ({
        config: {
            client: "mysql",
            useNullAsDefault: true,
            connection: {
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                database: configService.get<string>('DB_NAME'),
                user: configService.get<string>('DB_USER'),
                password: configService.get<string>('DB_PASS'),
                timezone: 'utc+3',
            }
        },
    }),
    inject: [ConfigService]
    }),
    ConfigModule.forRoot({
        isGlobal: true
    }),
    PatientModule,
    ScheduleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
