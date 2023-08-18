import { useState } from 'react';

import { formatCurrency } from '../../../utils/helpers';
import CreateCabinForm from '../CreateCabinForm';
import { useDeleteCabin } from '../useDeleteCabin';
import './cabinRow.scss';

const CabinRow = ({ cabin }) => {
  const [showForm, setShowForm] = useState(false);
  const { isDeleting, deleteCabin } = useDeleteCabin();

  const {
    id: cabinId,
    name,
    image,
    maxCapacity,
    discount,
    regularPrice,
  } = cabin;

  // const queryClient = useQueryClient();

  // const { isLoading, mutate } = useMutation({
  //   mutationFn: deleteCabin,
  //   onSuccess: () => {
  //     toast.success('删除成功!');

  //     queryClient.invalidateQueries({
  //       queryKey: ['cabins'],
  //     });
  //   },
  //   onError: (err) => toast.error(err.message),
  // });
  return (
    <>
      <div className="table-row">
        <img src={image} alt="" className="cabin-img" />
        <div className="cabin-name">{name}</div>
        <div>
          Fits up to <b>{maxCapacity}</b> guests
        </div>
        <div className="cabin-price">{formatCurrency(regularPrice)}</div>
        <div className="cabin-discount">{formatCurrency(discount)}</div>
        <div className="btn">
          <button onClick={() => setShowForm(!showForm)}>Edit</button>
          <button onClick={() => deleteCabin(cabinId)} disabled={isDeleting}>
            Delete
          </button>
        </div>
      </div>
      {showForm && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
};

export default CabinRow;
