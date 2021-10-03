import { COUNTRY_LIST } from './CountryIso';

const generateList = (schools, title) => {
    if (title?.toLowerCase() === 'institutions') {
        return schools?.filter((el) => !el?.isSecondarySchool).map((el) => el?.country ?? '');
    }
    return schools?.filter((el) => el?.isSecondarySchool).map((el) => el?.country ?? '');
};

const generateLink_list = (countries) =>
    countries.map((country) => {
        const countryName = COUNTRY_LIST?.find((el) => el?.['alpha-3'] === country)?.name ?? '';

        const countryLink = countryName?.toLowerCase()?.split(' ')?.join('-')?.trim();

        return countryLink;
    });

const getAlpha3 = (slug) => {
    const countryName = slug?.split('-').join(' ')?.trim();
    const countryAlpha = COUNTRY_LIST?.find((el) => el?.name?.toLowerCase() === countryName)?.['alpha-3'] ?? '';

    return [countryAlpha, countryName];
};

export { generateList, getAlpha3, generateLink_list };
