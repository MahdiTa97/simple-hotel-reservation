import React, { useEffect, useState } from "react";
import { CreateForm, SearchForm } from "../components";
import TableData from "../components/TableData";
import { createFieldsRoom, searchFieldsRoom } from "../constants/fields";
import { useRooms } from "../hooks/get-hooks";
import { onCreateRoom, onDeleteRoom, onUpdateRoom } from "../utils/requests";

const Room = () => {
  const [state, setState] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [defaultValues, setDefaultValues] = useState(false);
  const tableName = "Room";

  const {
    data: dataRooms,
    error: errorRooms,
    isLoading: isLoadingRooms,
    refetch,
  } = useRooms(state);

  const onSearchRoom = (params) => {
    setState(params);
  };

  const onDelete = (params) => {
    onDeleteRoom(params);
    refetch(state).then((res) => console.log(res));
  };
  const onAdd = (params) => {
    onCreateRoom(params);
    refetch(state).then((res) => console.log(res));
  };
  const onUpdate = (params) => {
    onUpdateRoom(params);
    refetch(state).then((res) => console.log(res));
  };

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [refetch, state]);

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <SearchForm
        onSubmit={onSearchRoom}
        items={searchFieldsRoom}
        onOpenModal={() => {
          setDefaultValues(null);
          setIsModalOpen(true);
        }}
      />
      <TableData
        tableName={tableName}
        isLoading={isLoadingRooms}
        error={errorRooms}
        data={dataRooms}
        onDelete={onDelete}
        setDefaultValues={setDefaultValues}
        onOpenModal={() => {
          setIsModalOpen(true);
        }}
      />

      <CreateForm
        onSubmit={defaultValues ? onUpdate : onAdd}
        isUpdate={defaultValues ? true : false}
        items={createFieldsRoom}
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

export default Room;
