import { useCallback, useEffect, useMemo, useRef } from "react";
import { useRouter } from "next/router";
import qs from "qs";

const keywords = {
    true: true,
    false: false,
    null: null,
    undefined,
};

const decoder = (str, _ /*decoder*/, charset) => {
    const strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }

    if (/^(\d+|\d*\.\d+)$/.test(str)) {
        return parseFloat(str);
    }

    if (str in keywords) {
        return keywords[str];
    }

    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
/** @type IParseOptions */
const PARSE_OPTIONS = { decoder, ignoreQueryPrefix: true };
/** @type IStringifyOptions */
const STRINGIFY_OPTIONS = { encode: false };

const useSearch = () => {
    const { query, push, pathname } = useRouter();
    const searchParams = useMemo(() => qs.parse(query, PARSE_OPTIONS), [query]);
    const searchParamsRef = useRef({});

    useEffect(() => {
        searchParamsRef.current = searchParams;
    }, [searchParams]);

    const setSearchParams = useCallback(
        (updater) => {
            const params = typeof updater === "function" ? updater(searchParamsRef.current) : updater;
            push({ pathname, query: qs.stringify(params, STRINGIFY_OPTIONS) });
        },
        [push, pathname]
    );

    return [searchParams, setSearchParams];
};

export default useSearch;
export { PARSE_OPTIONS, STRINGIFY_OPTIONS };
