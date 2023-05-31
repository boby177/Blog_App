import UseSWR from "swr";

const base_url = "https://b-techs.vercel.app/";
const response = (...args) => fetch(...args).then((res) => res.json());

export default function fetcher(endpoint) {
  const { data, error } = UseSWR(`${base_url}${endpoint}`,response);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}
