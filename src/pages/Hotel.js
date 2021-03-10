import React, { useEffect, useState } from "react";
import { CreateForm, SearchForm } from "../components";
import TableData from "../components/TableData";
import { createFieldsHotel, searchFieldsHotel } from "../constants/fields";
import { useHotels } from "../hooks/get-hooks";
import { onCreateHotel, onDeleteHotel, onUpdateHotel } from "../utils/requests";

const Hotel = () => {
  const [state, setState] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);
  const tableName = "Hotel";

  const {
    data: dataHotels,
    error: errorHotels,
    isLoading: isLoadingHotels,
    refetch,
  } = useHotels(state);

  const onSearchHotel = (params) => {
    setState(params);
  };

  const onDelete = (params) => {
    onDeleteHotel(params);
    refetch(state).then((res) => console.log(res));
  };
  const onAdd = (params) => {
    onCreateHotel(params);
    refetch(state).then((res) => console.log(res));
  };
  const onUpdate = (params) => {
    onUpdateHotel(params);
    refetch(state).then((res) => console.log(res));
  };

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [refetch, state]);

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <SearchForm
        onSubmit={onSearchHotel}
        items={searchFieldsHotel}
        onOpenModal={() => {
          setDefaultValues(null);
          setIsModalOpen(true);
        }}
      />
      <TableData
        tableName={tableName}
        isLoading={isLoadingHotels}
        error={errorHotels}
        data={dataHotels}
        onDelete={onDelete}
        setDefaultValues={setDefaultValues}
        onOpenModal={() => {
          setIsModalOpen(true);
        }}
      />

      <CreateForm
        onSubmit={defaultValues ? onUpdate : onAdd}
        isUpdate={defaultValues ? true : false}
        items={createFieldsHotel}
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

export default Hotel;
