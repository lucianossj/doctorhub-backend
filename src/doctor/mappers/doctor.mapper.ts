import { Builder } from "builder-pattern";
import { Doctor } from "../entities/doctor.entity";
import { DoctorResponse } from "../integration/doctor.response";
import { SpecialtyDoctorResponse } from "../integration/specialty-doctor.response";

export class DoctorMapper {

    public static entityArrayToResponse(entities: Doctor[]): DoctorResponse[] {
        return entities.map(entity => this.entityToResponse(entity));
    }

    public static entityToResponse(entity: Doctor): DoctorResponse {
        return Builder<DoctorResponse>()
            .code(entity.code)
            .fullname(entity.fullname)
            .username(entity.username)
            .password(entity.password)
            .specialty(this.specialtyEntityToResponse(entity))
        .build();
    }

    private static specialtyEntityToResponse(entity: Doctor): SpecialtyDoctorResponse {
        return Builder<SpecialtyDoctorResponse>()
            .code(entity.specialtyCode)
            .description(entity.specialty)
        .build();
    }

}