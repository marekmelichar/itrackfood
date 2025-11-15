import { useSearchParams } from 'react-router-dom';

export const useQueryParams = (defaultParams: Record<string, unknown> = {}) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get current query params and merge with default values
  const params = Object.fromEntries(searchParams.entries());

  const getParam = (key: string) => {
    const param = params[key];

    return param ? decodeURIComponent(param) : (defaultParams[key] ?? null);
  };

  const setParam = (key: string, value: string | number | boolean) => {
    const encodedValue = encodeURIComponent(value);
    const newParams = { ...params, [key]: encodedValue };
    setSearchParams(newParams);
  };

  return { getParam, setParam };
};
