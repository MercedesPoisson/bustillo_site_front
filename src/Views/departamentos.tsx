import React from "react";
import CardDptos from "../components/CardDptos";
import DptosDesc from "../components/DeptosDescrip";

const Departamentos = () => {
  return (
    <div className="mt-14">
      <DptosDesc />
      <CardDptos />
    </div>
  );
}

export default Departamentos;
