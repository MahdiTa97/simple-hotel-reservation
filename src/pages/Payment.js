import React, { useEffect, useState } from "react";
import { CreateForm, SearchForm } from "../components";
import TableData from "../components/TableData";
import { createFieldsPayment, searchFieldsPayment } from "../constants/fields";
import { usePayments } from "../hooks/get-hooks";
import {
  onCreatePayment,
  onDeletePayment,
  onUpdatePayment,
} from "../utils/requests";

const Payment = () => {
  const [state, setState] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);
  const tableName = "Payment";

  const {
    data: dataPayments,
    error: errorPayments,
    isLoading: isLoadingPayments,
    refetch,
  } = usePayments(state);

  const onSearchPayment = (params) => {
    setState(params);
  };

  const onDelete = (params) => {
    onDeletePayment(params);
    refetch(state).then((res) => console.log(res));
  };
  const onAdd = (params) => {
    onCreatePayment(params);
    refetch(state).then((res) => console.log(res));
  };
  const onUpdate = (params) => {
    onUpdatePayment(params);
    refetch(state).then((res) => console.log(res));
  };

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [refetch, state]);

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <SearchForm
        onSubmit={onSearchPayment}
        items={searchFieldsPayment}
        onOpenModal={() => {
          setDefaultValues(null);
          setIsModalOpen(true);
        }}
      />
      <TableData
        tableName={tableName}
        isLoading={isLoadingPayments}
        error={errorPayments}
        data={dataPayments}
        onDelete={onDelete}
        setDefaultValues={setDefaultValues}
        onOpenModal={() => {
          setIsModalOpen(true);
        }}
      />

      <CreateForm
        onSubmit={defaultValues ? onUpdate : onAdd}
        isUpdate={defaultValues ? true : false}
        items={createFieldsPayment}
        isModalOpen={isModalOpen}
        closeModal={() => {
          setIsModalOpen(false);
        }}
        tableName={tableName}
        defaultValues={defaultValues}
      />
    </div>
  );
};

export default Payment;
