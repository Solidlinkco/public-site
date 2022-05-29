const axios = require('axios');

const ENDPOINT = 'https://ams4you.net/amsapi/public/v1/webinquiry';
const config = {
    headers: {
        Authorization: `Bearer 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`,
        'Content-Type': 'application/json',
    },
};

function CreatedDateLocal() {
    var today = new Date();
    var yyyy = today.getFullYear();
    var mm = today.getMonth() + 1;
    var dd = today.getDate();
    var hr = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();
    if (mm < 10) {
        mm = '0' + mm;
    }
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (hr < 10) {
        hr = '0' + hr;
    }
    if (min < 10) {
        min = '0' + min;
    }
    if (sec < 10) {
        sec = '0' + sec;
    }
    return yyyy + '-' + mm + '-' + dd + ' ' + hr + ':' + min + ':' + sec;
}

export default async (req, res) => {
    const values = req.body;

    var myHeaders = new Headers();
    myHeaders.append('apikey', '750-e6dcc3cac0b63857e8e489d407b5bcfa');

    const newUrl = new URL(`${ENDPOINT}/add`);
    newUrl.searchParams.append('FirstName', values.fullName.split(' ')[0]);
    newUrl.searchParams.append('SurName', values.fullName.split(' ')[1]);
    newUrl.searchParams.append('Email', values.email);

    newUrl.searchParams.append('CreatedDateLocal', CreatedDateLocal());
    newUrl.searchParams.append('MobilePhone', values.phone);
    newUrl.searchParams.append('CustomField3', values.preferredCourse);
    newUrl.searchParams.append('ProgramsofInterest', values.program);
    newUrl.searchParams.append('Note', values.comment);
    newUrl.searchParams.append('Agreement1', 1);
    newUrl.searchParams.append('PageTitle', 'wonderful-yellow');

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        redirect: 'follow',
    };

    fetch(newUrl, requestOptions)
        .then((response) => response.json())
        .then((result) => {
            console.log('result', result, values);

            res.status(200).json({ data: result });
        })
        .catch((error) => res.status(200).json({ data: null, error: true }));
};
