import { useMutation, useQueryClient } from "@tanstack/react-query";
import { request } from "../../../../config/request";

export const useDeleteCate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => request.delete(`/category/${id}`).then((res) => res.data),
    onSuccess: () => {
      // Ma'lumotlarni yangilash uchun query cache ni invalidatsiya qilamiz
      queryClient.invalidateQueries(["category"]);
    },
  });
};
