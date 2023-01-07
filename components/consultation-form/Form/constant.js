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
    courseOfInterest1: 'courseOfInterest1',
    courseOfInterest2: 'courseOfInterest2',
    countryOfInterest1: 'countryOfInterest1',
    countryOfInterest2: 'countryOfInterest2',
    countryOfInterest3: 'countryOfInterest3',
    instituteOfInterest: 'instituteOFInterest',
    proposedYearOfResumption: 'proposedYearOfResumption',
    proposedMonthOfResumption: 'proposedMonthOfResumption',
    otherInterests: 'otherInterests',
    travellingAloneOrWithFamily: 'travellingAloneOrWithFamily',
    budget: 'budget',
    sponsor: 'sponsor',

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
    [contactFieldsNames.phoneNumber]: Yup.string().required('Phone number is required'),
    [contactFieldsNames.permanentAddress]: Yup.string().required('Permanent address is required'),
    [contactFieldsNames.maritalStatus]: Yup.string(),
    [contactFieldsNames.presentOrPreviousInstitute]: Yup.string().required('Present/Previous Institute is required'),
    [contactFieldsNames.currentSchoolYear]: Yup.string().required('Current School Year is required'),
    [contactFieldsNames.programmeOfInterest]: Yup.string().required('Programme of Interest is required'),
    [contactFieldsNames.proposedYearOfResumption]: Yup.string().required('Proposed Year of Resumption is required'),
    [contactFieldsNames.proposedMonthOfResumption]: Yup.string().required('Proposed Month of Resumption is required'),
    [contactFieldsNames.travellingAloneOrWithFamily]: Yup.string().required(
        'Travelling Alone or with Family is required'
    ),
    [contactFieldsNames.budget]: Yup.string().required('Budget is required'),
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
    [contactFieldsNames.courseOfInterest1]: '',
    [contactFieldsNames.courseOfInterest2]: '',
    [contactFieldsNames.countryOfInterest1]: '',
    [contactFieldsNames.countryOfInterest2]: '',
    [contactFieldsNames.countryOfInterest3]: '',
    [contactFieldsNames.instituteOfInterest]: '',
    [contactFieldsNames.proposedYearOfResumption]: '',
    [contactFieldsNames.proposedMonthOfResumption]: '',
    [contactFieldsNames.otherInterests]: '',
    [contactFieldsNames.travellingAloneOrWithFamily]: '',
    [contactFieldsNames.budget]: '',
    [contactFieldsNames.sponsor]: '',

    // [contactFieldsNames.cv]: '',
    // [contactFieldsNames.passport]: '',
    // [contactFieldsNames.necoOrWaecResult]: '',
    // [contactFieldsNames.degreeCertificate]: '',
    // [contactFieldsNames.degreeTranscript]: '',
    // [contactFieldsNames.testOfEnglishResult]: '',
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
        placeholder: 'select',
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
        required: true,
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
        name: contactFieldsNames.maritalStatus,
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
    {
        type: 'nested',
        name: 'nested.contactFieldsNames.courseOfInterest',
        label: 'Course of Interest (Please List Two Options)',
        inputs: [
            {
                type: 'text',
                name: contactFieldsNames.courseOfInterest1,
                label: 'Course 1',
                placeholder: 'Course of Interest',
                fullWidth: true,
            },
            {
                type: 'text',
                name: contactFieldsNames.courseOfInterest2,
                label: 'Course 2',
                placeholder: 'Course of Interest',
                fullWidth: true,
            },
        ],
    },
    {
        type: 'nested',
        name: 'nested.contactFieldsNames.countryOfInterest',
        label: 'Country of Interest',
        inputs: [
            {
                type: 'text',
                name: contactFieldsNames.countryOfInterest1,
                label: 'Country 1',
                placeholder: 'Country of Interest',
                fullWidth: true,
            },
            {
                type: 'text',
                name: contactFieldsNames.countryOfInterest2,
                label: 'Country 2',
                placeholder: 'Country of Interest',
                fullWidth: true,
            },
            {
                type: 'text',
                name: contactFieldsNames.countryOfInterest3,
                label: 'Country 3',
                placeholder: 'Country of Interest',
                fullWidth: true,
            },
        ],
    },
    {
        type: 'text',
        name: contactFieldsNames.instituteOfInterest,
        label: 'Institute of Interest',
        placeholder: 'Institute of Interest',
        fullWidth: true,
    },
    {
        type: 'text',
        name: contactFieldsNames.proposedYearOfResumption,
        label: 'Proposed Year of Resumption',
        placeholder: 'Proposed Year of Resumption',
        fullWidth: true,
        required: true,
    },
    {
        type: 'select',
        name: contactFieldsNames.proposedMonthOfResumption,
        label: 'Proposed Month of Resumption',
        placeholder: 'Proposed Month of Resumption',
        required: true,
        options: [
            {
                value: 'JANUARY',
                label: 'JANUARY',
            },
            {
                value: 'APRIL',
                label: 'APRIL',
            },
            {
                value: 'JULY',
                label: 'JULY',
            },
            {
                value: 'SEPTEMBER',
                label: 'SEPTEMBER',
            },
        ],
    },
    {
        type: 'text',
        name: contactFieldsNames.otherInterests,
        label: 'Other Interests  (Sports, Language or Other Skills) ',
        placeholder: 'Other Interests',
        fullWidth: true,
    },
    {
        type: 'select',
        name: contactFieldsNames.travellingAloneOrWithFamily,
        label: 'Travelling Alone or With Family',
        placeholder: 'Travelling Alone or With Family',
        required: true,
        options: [
            {
                value: 'ALONE',
                label: 'ALONE',
            },
            {
                value: 'WITH_FAMILY',
                label: 'WITH FAMILY',
            },
        ],
    },
    {
        type: 'select',
        name: contactFieldsNames.budget,
        label: 'Budget (Tuition Fees)',
        placeholder: 'Budget',
        required: true,
        options: [
            {
                value: 'SELF',
                label: '₦3 MILLION',
            },
            {
                value: 'SPOUSE',
                label: '₦4 MILLION',
            },
            {
                value: '₦5_MILLION',
                label: '₦5 MILLION',
            },
            {
                value: '₦6_MILLION',
                label: '₦6 MILLION',
            },
            {
                value: 'MORE_THAN_₦6_MILLION',
                label: 'MORE THAN ₦6 MILLION',
            },
        ],
    },
    {
        type: 'select',
        name: contactFieldsNames.sponsor,
        label: 'Sponsor',
        placeholder: 'Sponsor',
        helperText: 'Sponsor must have tuition fees plus another 4million Naira to cover one year living expenses.',
        options: [
            {
                value: 'SELF',
                label: 'SELF',
            },
            {
                value: 'SPOUSE',
                label: 'SPOUSE',
            },
            {
                value: 'PARENT',
                label: 'PARENT',
            },
            {
                value: 'RELATIVE',
                label: 'RELATIVE',
            },
            {
                value: 'OTHER',
                label: 'OTHER',
            },
        ],
    },

    { type: 'file', name: contactFieldsNames.cv, label: 'Upload CV', placeholder: 'Upload cv' },
    {
        type: 'file',
        name: contactFieldsNames.passport,
        label: 'Upload International Passport',
        placeholder: 'Upload  International Passport ',
        required: true,
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
        label: 'Upload Test of English Result ',
        placeholder: 'Upload Test of English Result',
    },
    {
        type: 'select',
        name: contactFieldsNames.howDidYouHearAboutUs,
        label: 'How did you hear about us?',
        placeholder: 'how you heard about us',
        fullWidth: true,
        options: [
            {
                value: 'FRIENDS_AND_FAMILY',
                label: 'FRIENDS AND FAMILY',
            },
            {
                value: 'OLD_CLIENT',
                label: 'OLD CLIENT',
            },
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
        ],
    },
];

export { initialValues, contactFields, schema };
