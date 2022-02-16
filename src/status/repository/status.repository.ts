import { Injectable } from "@nestjs/common";
import { InjectKnex, Knex } from "nestjs-knex";
import { Status } from "../entities/status.entity";

@Injectable()
export class StatusRepository {

    constructor(
        @InjectKnex() private readonly knex: Knex
    ) {}

    public findAll(): Promise<Status[]> {
        return this.knex.select('*').from('status');
    }

    public findOne(id: number): Promise<Status> {
        return this.knex.select('*').from('status')
            .where('code', '=', id)
            .first();
    }

}