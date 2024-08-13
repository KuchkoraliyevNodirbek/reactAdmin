import { useQuery } from "@tanstack/react-query";
import { request } from "../../../../config/request";
export const useAllproduct = () => {
  return useQuery({
    queryKey: ["allproduct"],
    queryFn: () => request.get("/products").then((res) => res.data),
  });
};
