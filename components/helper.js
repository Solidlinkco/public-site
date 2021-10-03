export const convertWAT = (date, tzString) => {
    return new Date(
        (typeof date === 'string' ? new Date(date) : date).toLocaleString('en-US', { timeZone: 'Africa/Lagos' })
    );
};

export const capitalize = (str) => (typeof str == 'string' ? `${str.charAt(0).toUpperCase()}${str.slice(1)}` : str);

// export const addToGoogleCalendar = () => {

//     return <a target="_blank" href="https://calendar.google.com/event?action=TEMPLATE&amp;tmeid=XzZnbzRhZHBrOG9wM2FiOWg2c3A0NmI5azhkMTNlYjlvNmdzNDJiOW44NTIzYWdhMzhvcjRhYzFsNjggYXlvZmVmQG0&amp;tmsrc=ayofef%40gmail.com"><img border="0" src="https://www.google.com/calendar/images/ext/gc_button1_en.gif"></a>
// }
