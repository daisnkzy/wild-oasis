import { useQuery } from '@tanstack/react-query';

import Spinner from '../../../components/ui/spinner/Spinner';
import { getCabins } from '../../../services/apiCabins';

import './cabinTable.scss';
import CabinRow from '../cabinRow/CabinRow';

const CabinTable = () => {
  const { isLoading, data: cabins } = useQuery({
    queryKey: ['cabins'],
    queryFn: getCabins,
  });

  if (isLoading) return <Spinner />;
  return (
    <div className="table">
      <header className="table-header">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {cabins.map((cabin) => (
        <CabinRow cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
};

export default CabinTable;
