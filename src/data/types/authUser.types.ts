
export enum ERole {
    ADMIN = 'admin'
}

export enum EUserType {
    DOCTOR = 'DOCTOR'
}

export type TAuthUserDB = {
    displayName: string
    email:string;
    fUserId: string;
    practiceId: string
    role:ERole
    type:EUserType
}


export type TAuthUserUI = {
    displayName: string
    email:string;
    fUserId: string;
    practiceId: string
    role:ERole
    type:EUserType
}
