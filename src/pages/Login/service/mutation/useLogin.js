import { useMutation } from "@tanstack/react-query";
import { request } from "../../../../config/requst";

export const useLogin = () => {
  return useMutation({
    mutationFn: (data) => request.post("/login", data).then((res) => res.data),
  });
};
