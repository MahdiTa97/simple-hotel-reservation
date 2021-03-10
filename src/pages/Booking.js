import React, { useEffect, useState } from "react";
import { CreateForm, SearchForm } from "../components";
import TableData from "../components/TableData";
import { createFieldsBooking, searchFieldsBooking } from "../constants/fields";
import { useBookings } from "../hooks/get-hooks";
import {
  onCreateBooking,
  onDeleteBooking,
  onUpdateBooking,
} from "../utils/requests";

const Booking = () => {
  const [state, setState] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);
  const tableName = "Booking";

  const {
    data: dataBookings,
    error: errorBookings,
    isLoading: isLoadingBookings,
    refetch,
  } = useBookings(state);

  const onSearchBooking = (params) => {
    setState(params);
  };

  const onDelete = (params) => {
    onDeleteBooking(params);
    refetch(state).then((res) => console.log(res));
  };
  const onAdd = (params) => {
    onCreateBooking(params);
    refetch(state).then((res) => console.log(res));
  };
  const onUpdate = (params) => {
    onUpdateBooking(params);
    refetch(state).then((res) => console.log(res));
  };

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [refetch, state]);

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <SearchForm
        onSubmit={onSearchBooking}
        items={searchFieldsBooking}
        onOpenModal={() => {
          setDefaultValues(null);
          setIsModalOpen(true);
        }}
      />
      <TableData
        tableName={tableName}
        isLoading={isLoadingBookings}
        error={errorBookings}
        data={dataBookings}
        onDelete={onDelete}
        setDefaultValues={setDefaultValues}
        onOpenModal={() => {
          setIsModalOpen(true);
        }}
      />

      <CreateForm
        onSubmit={defaultValues ? onUpdate : onAdd}
        isUpdate={defaultValues ? true : false}
        items={createFieldsBooking}
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

export default Booking;
