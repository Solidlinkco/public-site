import { useEffect, useState } from 'react';
import omit from 'lodash/omit';
import isEmpty from 'lodash/isEmpty';

import useSearch from './useSearch';
import { useDebounce } from 'react-use';

/**
 * @param {string} [key=search]
 *
 * @return {[string, function]}
 * */
const useSearchInput = (key = 'search') => {
    const [searchParams, setSearchParams] = useSearch();
    const search = searchParams?.filter?.[key] ?? '';
    const [value, setValue] = useState('');

    useDebounce(
        () => {
            setSearchParams((prevSearchParams) => {
                if (isEmpty(value)) {
                    return { ...prevSearchParams, filter: omit(prevSearchParams?.filter, [key]) };
                }

                return { ...prevSearchParams, filter: { ...prevSearchParams?.filter, [key]: value } };
            });
        },
        500,
        [value]
    );

    useEffect(() => setValue(search), [search]);

    return [value, setValue];
};

export { useSearchInput };
