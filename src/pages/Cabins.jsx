import Heading from '../ui/Heading';
import Row from '../ui/Row';
import CreateCabinForm from '../features/cabins/CreateCabinForm';
import CabinTable from '../features/cabins/cabinTable/CabinTable';
import { useState } from 'react';

function Cabins() {
  const [showForm, setShowForm] = useState(false);
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <div>1/2</div>
      </Row>
      <Row>
        <CabinTable />
        <button onClick={() => setShowForm(!showForm)}>add new cabin</button>
        {showForm && <CreateCabinForm />}
      </Row>
    </>
  );
}

export default Cabins;
