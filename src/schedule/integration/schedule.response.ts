import { DoctorScheduleResponse } from "./doctor-schedule.response";
import { PatientScheduleResponse } from "./patient-schedule.response";
import { SpecialtyScheduleResponse } from "./specialty-schedule.response";
import { StatusScheduleResponse } from "./status-schedule.response";

export class ScheduleResponse {
    public code: number;
    public date: string;
    public hour: string;
    public status: StatusScheduleResponse;
    public specialty: SpecialtyScheduleResponse;
    public doctor: DoctorScheduleResponse;
    public patient: PatientScheduleResponse;
}
