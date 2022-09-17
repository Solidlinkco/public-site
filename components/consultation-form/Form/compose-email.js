import { contactFields } from './constant';

export const composeEmail = (values) => {
    const keyArray = Object.keys(values);

    const valueArray = keyArray.map((key) => {
        const labelFinder = contactFields.find((field) => {
            if (field.inputs) {
                return field.inputs?.find((child) => child.name === key);
            }

            return field.name === key;
        });

        const label = labelFinder?.label || labelFinder?.find((input) => input.name === key)?.label;

        return `\n${label}: ${values[key] || 'Null'}`;
    });

    const emailBody = `
        ${valueArray.join('\n')}
    `;

    return emailBody;
};
