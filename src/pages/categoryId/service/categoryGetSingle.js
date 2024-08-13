import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/request";

export const categoryGetSingle = (id) => {
  return useQuery({
    queryKey: ["categoryGetSingle", id],
    queryFn: () =>
      request
        .get("/products", {
          params: {
            categoryId: id,
          },
        })
        .then((res) => res.data),
  });
};
