import React, { useEffect, useState } from "react";
import { From, SpinnerLoader, Table } from "../components";
import { usePayments } from "../hooks/get-hooks";
import { client } from "../utils";

const Payment = () => {
  const [state, setState] = useState();
  const items = ["paymentNo", "paymentPrice", "paymentType", "paymentDate"];

  const {
    data: dataPayments,
    error: errorPayments,
    isLoading: isLoadingPayments,
    refetch,
  } = usePayments(state);

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [state]);

  function onDelete(parameters) {
    client
      .post(`/deletepayment`, {
        data: {
          paymentNo: parameters.paymentno,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <From setState={setState} items={items} />
      <div className="border-t-2">
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Payments
        </h1>
        {isLoadingPayments && !errorPayments ? <SpinnerLoader /> : null}
        {!isLoadingPayments && !errorPayments ? (
          <Table data={dataPayments} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default Payment;
