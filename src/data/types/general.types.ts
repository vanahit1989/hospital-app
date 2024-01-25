export type TAddressUI = {
    city: string;
    country: string;
    state: string;
    street: string;
    zipCode: string;
}

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
export enum ESourceUI {
    MANUAL = 'MANUAL',
    EHR = 'EHR'
}

export enum EPaymentStatusUI  {
    PENDING = 'Pending',
    PAID = 'Paid'
}

export enum EPaymentStatusDB  {
    PENDING = 'PENDING',
    PAID = 'PAID'
}