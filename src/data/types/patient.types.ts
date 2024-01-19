import {ESourceDB, TAddressDB} from "./general.types.ts";

export type TCreatePatientDB = {
    name: string;
    address: TAddressDB;
    creationDate: Date;
    practiceId: string;
    source: ESourceDB;
}