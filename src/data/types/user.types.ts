
export enum ERoleUI {
    ADMIN = 'admin'
}
export enum ERoleDB {
    ADMIN = 'admin'
}

export enum EUserTypeDB {
    DOCTOR = 'DOCTOR'
}

export enum EUserTypeUI {
    DOCTOR = 'Doctor'
}


export type TUserDB = {
    displayName: string
    email:string;
    fUserId: string;
    practiceId: string
    role:ERoleDB
    type:EUserTypeDB
}


export type TUserUI = {
    docId: string;
    displayName: string
    email:string;
    fUserId: string;
    practiceId: string
    role:ERoleUI
    type:EUserTypeUI
}
