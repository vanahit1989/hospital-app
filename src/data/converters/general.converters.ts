import {TConvertor, TFetchConverter} from "../types/converter.types.ts";
import {
    EPaymentStatusDB,
    EPaymentStatusUI,
    ESourceDB,
    ESourceUI,
    TAddressDB,
    TAddressUI
} from "../types/general.types.ts";

export const addressToStringConverter:TFetchConverter<string, TAddressDB> = {
    fromDb: ({country, city, street, zipCode, state}) => {
        return  `${street || ''} ${city || ''} ${state || ''} ${zipCode || ''} ${country || ''}`
}}

export const addressConverter:TConvertor<TAddressUI, TAddressDB> = {
    fromDb: ({street, state, city, zipCode, country}) => {
        return {
            state: state || '',
            city: city || '',
            street: street || '',
            zipCode: zipCode || '',
            country: country || ''
        };
    },
    toDb: ({street, state, city, zipCode, country}) => {
        return {
            state: state || '',
            city: city || '',
            street: street || '',
            zipCode: zipCode || '',
            country: country || ''
        };
    }

}
export const sourceConverter: TConvertor<ESourceUI, ESourceDB> = {
    fromDb: (data) => {
        const sources: {
            [key in ESourceDB]: ESourceUI;
        } = {
            [ESourceDB.MANUAL]: ESourceUI.MANUAL,
            [ESourceDB.EHR]: ESourceUI.EHR,
        };
        return sources[data];
    } ,
    toDb: (data) => {
        const sources: {
            [key in ESourceUI]: ESourceDB;
        } = {
            [ESourceUI.MANUAL]: ESourceDB.MANUAL,
            [ESourceUI.EHR]: ESourceDB.EHR,
        };
        return sources[data];
    }
}

export const paymentStatusConverter: TConvertor<EPaymentStatusUI, EPaymentStatusDB> = {
    fromDb: (data) => {
        const sources: {
            [key in EPaymentStatusDB]: EPaymentStatusUI;
        } = {
            [EPaymentStatusDB.PENDING]: EPaymentStatusUI.PENDING,
            [EPaymentStatusDB.PAID]: EPaymentStatusUI.PAID,
        };
        return sources[data];
    } ,
    toDb: (data) => {
        const sources: {
            [key in EPaymentStatusUI]: EPaymentStatusDB;
        } = {
            [EPaymentStatusUI.PENDING]: EPaymentStatusDB.PENDING,
            [EPaymentStatusUI.PAID]: EPaymentStatusDB.PAID,
        };
        return sources[data];
    }
}