import { useQuery } from "@tanstack/react-query";

import { request } from "../../../../config/requst";
export const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: () => request.get("/category").then((res) => res.data),
  });
};
