import {validationRules} from "../../../../../components/Form/validationRules.ts";

export const visitFields = {
    doctor: {
        name: 'doctor',
        label: 'Doctor',
        placeholder: 'Select doctor',
        rules: [validationRules.required()],
    },
    issue: {
        name: 'issue',
        label: 'Issue',
        placeholder: 'input the issue',
        rules: [validationRules.required()],
    }
}