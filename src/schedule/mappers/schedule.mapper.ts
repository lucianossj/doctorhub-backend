import { Builder } from "builder-pattern";
import { Schedule } from "../entities/schedule.entity";
import { DoctorScheduleResponse } from "../integration/doctor-schedule.response";
import { PatientScheduleResponse } from "../integration/patient-schedule.response";
import { ScheduleResponse } from "../integration/schedule.response";
import { SpecialtyScheduleResponse } from "../integration/specialty-schedule.response";
import { StatusScheduleResponse } from "../integration/status-schedule.response";

export class ScheduleMapper {

    public static mapEntitiesArrayToResponse(entities: Schedule[]): ScheduleResponse[] {
        return entities.map(entity => this.mapEntityToResponse(entity));
    }

    public static mapEntityToResponse(entity: Schedule): ScheduleResponse {
        return Builder<ScheduleResponse>()
            .code(entity.code)
            .date(entity.date)
            .hour(entity.hour)
            .status(this.mapStatusEntityToResponse(entity))
            .specialty(this.mapSpecialtyEntityToResponse(entity))
            .doctor(this.mapDoctorEntityToResponse(entity))
            .patient(this.mapPatientEntityToResponse(entity))
        .build();
    }

    private static mapStatusEntityToResponse(entity: Schedule): StatusScheduleResponse {
        return Builder<StatusScheduleResponse>()
            .code(entity.statusCode)
            .description(entity.status)
        .build();
    }

    private static mapSpecialtyEntityToResponse(entity: Schedule): SpecialtyScheduleResponse {
        return Builder<SpecialtyScheduleResponse>()
            .code(entity.specialtyCode)
            .description(entity.specialty)
        .build();
    }

    private static mapDoctorEntityToResponse(entity: Schedule): DoctorScheduleResponse {
        return Builder<DoctorScheduleResponse>()
            .code(entity.doctorCode)
            .fullname(entity.doctor)
        .build();
    }

    private static mapPatientEntityToResponse(entity: Schedule): PatientScheduleResponse {
        return Builder<PatientScheduleResponse>()
            .code(entity.patientCode)
            .fullname(entity.patient)
        .build();
    }

}