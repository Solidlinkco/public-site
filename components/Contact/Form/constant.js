import * as Yup from 'yup';

const buildValidator = (schema) => (values) =>
    schema
        .validate(values, { abortEarly: false })
        .then(() => null)
        .catch(({ inner }) =>
            inner.reduce((acc, { path, message }) => {
                acc[path] = acc[path] || [];
                acc[path].push(message);
                return acc;
            }, {})
        );

const contactFieldsNames = {
    fullName: 'fullName',
    email: 'email',
    phone: 'phone',
    preferredCourse: 'preferredCourse',
    program: 'program',
    comment: 'comment',
};

const schema = Yup.object().shape({
    [contactFieldsNames.fullName]: Yup.string().required('Full name is required'),
    [contactFieldsNames.email]: Yup.string().email('Email is not valid').required('Email is required'),
    [contactFieldsNames.phone]: Yup.string().required('Phone no. is required'),
});

const initialValues = {
    [contactFieldsNames.fullName]: 'tets',
    [contactFieldsNames.email]: 'test@mail.com',
    [contactFieldsNames.phone]: '009837637266382',
    [contactFieldsNames.preferredCourse]: '',
    [contactFieldsNames.program]: '',
    [contactFieldsNames.comment]: '',
};

const contactFields = [
    { type: 'text', name: contactFieldsNames.fullName, label: 'Full name*', placeholder: 'Your name' },
    { type: 'text', name: contactFieldsNames.email, label: 'Email*', placeholder: 'Email address' },

    { type: 'text', name: contactFieldsNames.phone, label: 'Phone no.*', placeholder: 'Phone no' },
    {
        type: 'text',
        name: contactFieldsNames.preferredCourse,
        label: 'Preferred course',
        placeholder: 'Preferred course',
    },
    {
        type: 'textField',
        name: contactFieldsNames.program,
        label: 'Program of Interest',
        placeholder: 'Undergrad or Postgraduate',
    },
    {
        type: 'textField',
        name: contactFieldsNames.comment,
        label: 'Comments',
        placeholder: 'Type in your comments',
    },
];

export { initialValues, contactFields, schema, buildValidator };
