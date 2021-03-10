import React, { useEffect, useState } from "react";
import { CreateForm, SearchForm } from "../components";
import TableData from "../components/TableData";
import { createFieldsGuest, searchFieldsGuest } from "../constants/fields";
import { useGuests } from "../hooks/get-hooks";
import { onCreateGuest, onDeleteGuest, onUpdateGuest } from "../utils/requests";

const Guest = () => {
  const [state, setState] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);
  const tableName = "Guest";

  const {
    data: dataGuests,
    error: errorGuests,
    isLoading: isLoadingGuests,
    refetch,
  } = useGuests(state);

  const onSearchGuest = (params) => {
    setState(params);
  };

  const onDelete = (params) => {
    onDeleteGuest(params);
    refetch(state).then((res) => console.log(res));
  };
  const onAdd = (params) => {
    onCreateGuest(params);
    refetch(state).then((res) => console.log(res));
  };
  const onUpdate = (params) => {
    onUpdateGuest(params);
    refetch(state).then((res) => console.log(res));
  };

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [refetch, state]);

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <SearchForm
        onSubmit={onSearchGuest}
        items={searchFieldsGuest}
        onOpenModal={() => {
          setDefaultValues(null);
          setIsModalOpen(true);
        }}
      />
      <TableData
        tableName={tableName}
        isLoading={isLoadingGuests}
        error={errorGuests}
        data={dataGuests}
        onDelete={onDelete}
        setDefaultValues={setDefaultValues}
        onOpenModal={() => {
          setIsModalOpen(true);
        }}
      />

      <CreateForm
        onSubmit={defaultValues ? onUpdate : onAdd}
        isUpdate={defaultValues ? true : false}
        items={createFieldsGuest}
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

export default Guest;
