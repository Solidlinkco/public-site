import { useCallback, useMemo } from "react";
import useSearch from "./useSearch";

const useSearchFilter = () => {
    const [searchParams, setSearchParams] = useSearch();
    const currentFilter = useMemo(() => searchParams.filter || {}, [searchParams]);

    const setFilter = useCallback(
        (filter) => {
            setSearchParams((prevSearchParams) => ({ ...prevSearchParams, filter: { ...prevSearchParams?.filter, ...filter } }));
        },
        [setSearchParams]
    );

    return [currentFilter, setFilter];
};

export default useSearchFilter;
