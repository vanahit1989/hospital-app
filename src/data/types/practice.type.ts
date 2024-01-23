export type TPracticeAddressUI = {
    city: string;
    country: string;
    state: string;
    street: string;
    zipCode: string
};
export type TPracticeAddressDB = {
    city: string;
    country: string;
    state: string;
    street: string;
    zipCode: string
};

export type TPracticeUI = {
    address: TPracticeAddressUI;
    creationDate:string;
    doctors:string[];
    logoUrl:string;
    name:string;
    timeZone:string;
    docId:string
}
export type TPracticeDB = {
    address: TPracticeAddressDB;
    creationDate:string;
    doctors:string[];
    logoUrl:string;
    name:string;
    timeZone:string;
}