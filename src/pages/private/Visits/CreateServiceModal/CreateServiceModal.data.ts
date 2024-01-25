import {validationRules} from "../../../../components/Form/validationRules.ts";

export const serviceFields = {
    name: {
        name: 'name',
        label: 'Service name',
        placeholder: 'Service name',
        rules: [validationRules.required()],
    },
    count: {
        name: 'count',
        label: 'Count of service',
        placeholder: 'Count',
        rules: [validationRules.required()],
    },
    price: {
        name: 'price',
        label: 'Price of service',
        placeholder: 'price',
        rules: [validationRules.required()],
    }
}