import * as Yup from 'yup';

const contactFieldsNames = {
    firstName: 'firstName',
    lastName: 'lastName',
    nationality: 'nationality',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    email: 'email',
    phoneNumber: 'phoneNumber',
    permanentAddress: 'permanentAddress',
    maritalStatus: 'maritalStatus',
    presentOrPreviousInstitute: 'presentOrPreviousInstitute',
    currentSchoolYear: 'currentSchoolYear',
    programmeOfInterest: 'programmeOfInterest',

    cv: 'cv',
    passport: 'passport',
    necoOrWaecResult: 'necoOrWaecResult',
    degreeCertificate: 'degreeCertificate',
    degreeTranscript: 'degreeTranscript',
    testOfEnglishResult: 'testOfEnglishResult',
    howDidYouHearAboutUs: 'howDidYouHearAboutUs',
};

const schema = Yup.object().shape({
    [contactFieldsNames.firstName]: Yup.string().required('First name is required'),
    [contactFieldsNames.lastName]: Yup.string().required('Last name is required'),
    [contactFieldsNames.nationality]: Yup.string().required('Nationality is required'),
    [contactFieldsNames.dateOfBirth]: Yup.string().required('Date of birth is required'),
    [contactFieldsNames.gender]: Yup.string(),
    [contactFieldsNames.email]: Yup.string().email('Email is not valid').required('Email is required'),
    [contactFieldsNames.phoneNumber]: Yup.string(),
    [contactFieldsNames.permanentAddress]: Yup.string().required('Permanent address is required'),
    [contactFieldsNames.maritalStatus]: Yup.string(),
    [contactFieldsNames.presentOrPreviousInstitute]: Yup.string().required('Present/Previous Institute is required'),
    [contactFieldsNames.currentSchoolYear]: Yup.string().required('Current School Year is required'),
    [contactFieldsNames.programmeOfInterest]: Yup.string().required('Programme of Interest is required'),
});

const initialValues = {
    [contactFieldsNames.firstName]: '',
    [contactFieldsNames.lastName]: '',
    [contactFieldsNames.nationality]: '',
    [contactFieldsNames.dateOfBirth]: '',
    [contactFieldsNames.gender]: '',
    [contactFieldsNames.email]: '',
    [contactFieldsNames.phoneNumber]: '',
    [contactFieldsNames.permanentAddress]: '',
    [contactFieldsNames.maritalStatus]: '',
    [contactFieldsNames.presentOrPreviousInstitute]: '',
    [contactFieldsNames.currentSchoolYear]: '',
    [contactFieldsNames.programmeOfInterest]: '',

    [contactFieldsNames.cv]: '',
    [contactFieldsNames.passport]: '',
    [contactFieldsNames.necoOrWaecResult]: '',
    [contactFieldsNames.degreeCertificate]: '',
    [contactFieldsNames.degreeTranscript]: '',
    [contactFieldsNames.testOfEnglishResult]: '',
    [contactFieldsNames.howDidYouHearAboutUs]: '',
};

const contactFields = [
    {
        type: 'text',
        name: contactFieldsNames.firstName,
        label: 'First name',
        placeholder: 'First name',
        required: true,
    },
    { type: 'text', name: contactFieldsNames.lastName, label: 'Last name', placeholder: 'Last name', required: true },
    {
        type: 'text',
        name: contactFieldsNames.nationality,
        label: 'Nationality/Passport (PLEASE MENTION IF YOU HAVE A DUAL CITIZENSHIP)',
        placeholder: 'Nationality/Passport',
        required: true,
        fullWidth: true,
    },
    {
        type: 'date',
        name: contactFieldsNames.dateOfBirth,
        label: 'Date of Birth',
        placeholder: 'Nationality/Passport',
        required: true,
    },
    {
        type: 'select',
        name: contactFieldsNames.gender,
        label: 'Gender',
        placeholder: 'Gender',
        required: true,
        options: [
            {
                value: 'MALE',
                label: 'MALE',
            },
            {
                value: 'FEMALE',
                label: 'FEMALE',
            },
        ],
    },
    { type: 'text', name: contactFieldsNames.email, label: 'Email', placeholder: 'Email address', required: true },
    {
        type: 'tel',
        name: contactFieldsNames.phoneNumber,
        label: 'Phone Number',
        placeholder: '(000) 000-0000',
        pattern: '[0-9]{3}-[0-9]{3}-[0-9]{4}',
    },
    {
        type: 'textarea',
        name: contactFieldsNames.permanentAddress,
        label: 'Permanent Address',
        placeholder: 'Permanent address',
        required: true,
    },
    {
        type: 'select',
        name: contactFieldsNames.gender,
        label: 'Marital Status',
        placeholder: 'Marital Status',
        required: true,
        options: [
            {
                value: 'SINGLE',
                label: 'SINGLE',
            },
            {
                value: 'MARRIED',
                label: 'MARRIED',
            },
            {
                value: 'DIVORCED',
                label: 'DIVORCED',
            },
        ],
    },
    {
        type: 'text',
        name: contactFieldsNames.presentOrPreviousInstitute,
        label: 'Present/Previous Institute',
        placeholder: 'Present/Previous Institute',
        required: true,
    },
    {
        type: 'text',
        name: contactFieldsNames.currentSchoolYear,
        label: 'Current School Year',
        placeholder: 'Current School Year',
        required: true,
    },
    {
        type: 'select',
        name: contactFieldsNames.programmeOfInterest,
        label: 'Programme of Interest',
        placeholder: 'Programme of Interest',
        required: true,
        options: [
            {
                value: 'UNDERGRADUATE',
                label: 'UNDERGRADUATE',
            },
            {
                value: 'POSTGRADUATE',
                label: 'POSTGRADUATE',
            },
            {
                value: 'FOUNDATION',
                label: 'FOUNDATION',
            },
            {
                value: 'DOCTORATE',
                label: 'DOCTORATE',
            },
        ],
    },
    { type: 'file', name: contactFieldsNames.cv, label: 'Upload CV', placeholder: 'Upload cv' },
    {
        type: 'file',
        name: contactFieldsNames.passport,
        label: 'Upload International Passport *',
        placeholder: 'Upload  International Passport ',
    },
    {
        type: 'file',
        name: contactFieldsNames.necoOrWaecResult,
        label: 'Upload WAEC/NECO Result',
        placeholder: 'Upload WAEC/NECO Result',
    },
    {
        type: 'file',
        name: contactFieldsNames.degreeCertificate,
        label: 'Upload Degree Certificate',
        placeholder: 'Upload Degree Certificate ',
    },
    {
        type: 'file',
        name: contactFieldsNames.degreeTranscript,
        label: 'Upload Degree Transcript',
        placeholder: 'Upload Degree Transcript',
    },
    {
        type: 'file',
        name: contactFieldsNames.testOfEnglishResult,
        label: 'Upload Test of English Result',
        placeholder: 'Upload Test of English Result',
    },
    {
        type: 'select',
        name: contactFieldsNames.howDidYouHearAboutUs,
        label: 'How did you hear about us?',
        placeholder: 'how you heard about us',
        required: true,
        fullWidth: true,
        options: [
            {
                value: 'FACEBOOK',
                label: 'FACEBOOK',
            },
            {
                value: 'TWITTER',
                label: 'TWITTER',
            },

            {
                value: 'INSTAGRAM',
                label: 'INSTAGRAM',
            },
            {
                value: 'YOUTUBE',
                label: 'YOUTUBE',
            },
            {
                value: 'OUR_WEBSITE',
                label: 'OUR     WEBSITE',
            },
            {
                value: 'GOOGLE',
                label: 'GOOGLE',
            },
            {
                value: 'TIKTOK',
                label: 'TIKTOK',
            },
            {
                value: 'FRIENDS_AND_FAMILY',
                label: 'FRIENDS AND FAMILY',
            },
            {
                value: 'OLD_CLIENT',
                label: 'OLD CLIENT',
            },
        ],
    },
];

export { initialValues, contactFields, schema };
