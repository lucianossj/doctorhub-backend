import { Injectable } from "@nestjs/common";
import { InjectKnex, Knex } from "nestjs-knex";
import { Specialty } from "../entities/specialty.entity";

@Injectable()
export class SpecialtyRepository {

    constructor(
        @InjectKnex() private readonly knex: Knex
    ) {}

    public findAll(): Promise<Specialty[]> {
        return this.knex.select('*').from('specialty');
    }

    public findOne(id: number): Promise<Specialty> {
        return this.knex.select('*').from('specialty')
            .where('code', '=', id)
            .first();
    }

}