import React, { useEffect, useState } from "react";
import { From, SpinnerLoader, Table } from "../components";
import { useRooms } from "../hooks/get-hooks";
import { client } from "../utils";

const Room = () => {
  const [state, setState] = useState();
  const items = ["roomNo", "hotelNo", "roomType", "roomPrice", "roomStatus"];

  const {
    data: dataRooms,
    error: errorRooms,
    isLoading: isLoadingRooms,
    refetch,
  } = useRooms(state);

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [state]);

  function onDelete(parameters) {
    client
      .post(`/deleteroom`, {
        data: {
          roomNo: parameters.roomno,
          hotelNo: parameters.hotelno,
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
          Rooms
        </h1>
        {isLoadingRooms && !errorRooms ? <SpinnerLoader /> : null}
        {!isLoadingRooms && !errorRooms ? (
          <Table data={dataRooms} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default Room;
