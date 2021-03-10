import React from "react";
import { SpinnerLoader, Table } from "../components";

export default function TableData(props) {
  const {
    tableName,
    isLoading,
    error,
    data,
    onDelete,
    setDefaultValues,
    onOpenModal,
  } = props;
  return (
    <div className="border-t-2">
      <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
        {tableName}
      </h1>
      {isLoading && !error ? <SpinnerLoader /> : null}
      {!isLoading && !error ? (
        <Table
          data={data}
          onDelete={onDelete}
          setDefaultValues={setDefaultValues}
          onOpenModal={onOpenModal}
        />
      ) : null}
    </div>
  );
}
