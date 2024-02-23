import React from 'react';
import CardDptos from '../components/CardDptos';
import DptosDesc from '../components/DeptosDescrip';

function Departamentos() {
    return(
        <div className='mt-14'>
            <DptosDesc />
            <CardDptos />
            <h1>Departamentos</h1>
        </div>
    )
}

export default Departamentos;