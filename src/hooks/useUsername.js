import useSWR from "swr";
import axios from "axios";
import { useSession } from "next-auth/react";

const fetcher = async (url) => {
  // currently returns user instead of usename
  const data = await axios.get(url);
  return data;
};

const useUsername = (customID) => {
  const url = `api/getUsername/${customID}`;

  return useSWR(url, fetcher);
};

export default useUsername;
