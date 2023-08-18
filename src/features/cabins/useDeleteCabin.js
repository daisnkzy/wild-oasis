import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCabin as deleteCabinFn } from '../../services/apiCabins';
import { toast } from 'react-hot-toast';

export const useDeleteCabin = () => {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinFn,
    onSuccess: () => {
      toast.success('删除成功!');

      queryClient.invalidateQueries({
        queryKey: ['cabins'],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
};
