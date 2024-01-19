import {validationRules} from "../../../../components/Form/validationRules.ts";

export const patientFields = {
    country: {
        name: 'country',
        label: 'Country',
        placeholder: 'Country',
        rules: [validationRules.required()],
    },
    city: {
        name: 'city',
        label: 'City',
        placeholder: 'City',
        rules: [validationRules.required()],
    },
    state: {
        name: 'state',
        label: 'State',
        placeholder: 'State',
        rules: [validationRules.required()],
    },
    street: {
        name: 'street',
        label: 'Street',
        placeholder: 'street',
        rules: [validationRules.required()],
    },
    zipCode: {
        name: 'zipCode',
        label: 'Zip code',
        placeholder: 'Zip code',
        rules: [validationRules.required()],
    },
    name: {
        name: 'name',
        label: 'Name',
        placeholder: 'Type your name',
        rules: [validationRules.required()],
    }
}