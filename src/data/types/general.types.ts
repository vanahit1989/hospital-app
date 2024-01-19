export type TAddressDB = {
    city: string;
    country: string;
    state: string;
    street: string;
    zipCode: string;
}

export enum ESourceDB {
    MANUAL = 'MANUAL',
    EHR = 'EHR'
}