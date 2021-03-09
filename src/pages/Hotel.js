import React, { useEffect, useState } from "react";
import { From, SpinnerLoader, Table } from "../components";
import { useDeleteHotel } from "../hooks/delete-hooks";
import { useHotels } from "../hooks/get-hooks";
import { client } from "../utils";

const Hotel = () => {
  const [state, setState] = useState();
  const items = ["hotelNo", "hotelName", "city"];

  const {
    data: dataHotels,
    error: errorHotels,
    isLoading: isLoadingHotels,
    refetch,
  } = useHotels(state);

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [state]);

  function onDelete(parameters) {
    client
      .post(`/deletehotel`, {
        data: {
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
          Hotels
        </h1>
        {isLoadingHotels && !errorHotels ? <SpinnerLoader /> : null}
        {!isLoadingHotels && !errorHotels ? (
          <Table data={dataHotels} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default Hotel;
