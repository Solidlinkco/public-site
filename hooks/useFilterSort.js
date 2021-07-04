import { useState, useMemo } from 'react';
import { get } from 'lodash';
import useSearch from './useSearch';
const sortList = (sort, list, type) => {
    switch (sort) {
        case 'AZ':
            const ascending = list?.sort((a, b) => a?.company?.name?.localeCompare(b?.company?.name));
            return ascending;
        case 'ZA':
            const descending = list?.sort((a, b) => b?.company?.name?.localeCompare(a?.company?.name));
            return descending;
        default:
            return list;
    }
};

export { sortList };

const isEmpty = (object) => Object.values(object).every((x) => x === null || x === '');

export const useFilterSort = (list, type) => {
    const [searchParams] = useSearch();
    const filterActive = useMemo(() => !isEmpty(searchParams), [searchParams]);

    const filteredList = useMemo(
        () =>
            list.filter((item) => {
                let filterResult = true;
                Object.keys(searchParams?.filter ?? {}).map((filterKey) => {
                    const value = get(item, 'title');

                    if (filterKey === 'search') {
                        filterResult =
                            value?.toLowerCase().indexOf(searchParams?.filter[filterKey]?.toLowerCase()) > -1;
                    }
                });
                return filterResult;
            }),
        [searchParams, list]
    );
    const filterSortList = useMemo(
        () => sortList(searchParams?.sort, filteredList),
        [searchParams, filteredList, type]
    );

    const filterListTotal = filterSortList?.length;

    return { filterListTotal, filterSortList, filterActive };
};
