const TEMPLATE = ({ name, email, edu, country, phone, cancel, reschedule, startDate }) =>
    encodeURIComponent(` 

<b>ALERT!! NEW CONSULTATION HAS BEEN BOOKED</b>
<pre>Date: <code>${startDate}</code> </pre>
<pre>Name: <code>${name}</code> </pre>
<pre>Email: <code>${email}</code> </pre>
${phone && `<pre>Phone: <a href="tel:${phone}">${phone}</a></pre>`}
${edu && `<pre>Education: <code>${edu}</code></pre>`}
${country && `<pre>Preferred country: <code>${country}</code></pre>`}
<a href="${cancel}">CANCEL</a>
<a href="${cancel}">RESCHEDULE</a>




`);

const telegram = (message) =>
    `https://api.telegram.org/bot${process.env.telegramBot}/sendMessage?chat_id=@${process.env.telegramChannel}&parse_mode=HTML&text=${message}`;

const config = {
    headers: { Authorization: `Bearer ${process.env.calendlyToken}` },
};

const CUSTOM_QUESTION_MAP = {
    phone: 'Phone number',
    edu: 'Level of education enquiring about',
    country: 'Prefered Country',
};

const findAnswer = (arr, key) => arr?.find((el) => el?.question === key)?.answer;

const parseData = (data, startDate) => {
    const dataObj = data?.resource;

    const questionsObj = dataObj?.questions_and_answers;

    const msgPayload = {
        name: dataObj?.name,
        email: dataObj?.email,
        phone: findAnswer(questionsObj, CUSTOM_QUESTION_MAP.phone),
        cancel: dataObj?.cancel_url,
        reschedule: dataObj?.reschedule_url,
        country: findAnswer(questionsObj, CUSTOM_QUESTION_MAP.country),
        edu: findAnswer(questionsObj, CUSTOM_QUESTION_MAP.edu),
        startDate,
    };

    return msgPayload;
};

export { TEMPLATE, telegram, config, parseData };
