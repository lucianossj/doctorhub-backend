import { SpecialtyDoctorResponse } from "./specialty-doctor.response";

export class DoctorResponse {
    public code?: number;
    public fullname: string;
    public username: string;
    public password: string;
    public specialty: SpecialtyDoctorResponse;
}
