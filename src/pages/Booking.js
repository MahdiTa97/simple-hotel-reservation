import React, { useEffect, useState } from "react";
import { From, SpinnerLoader, Table } from "../components";
import { useBookings } from "../hooks/get-hooks";
import { client } from "../utils";

const Booking = () => {
  const [state, setState] = useState();
  const items = ["hotelNo", "guestSsn", "dateIn", "dateOut", "roomNo"];

  const {
    data: dataBookings,
    error: errorBookings,
    isLoading: isLoadingBookings,
    refetch,
  } = useBookings(state);

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [state]);

  function onDelete(parameters) {
    client
      .post(`/deletebooking`, {
        data: {
          hotelNo: parameters.hotelno,
          guestSsn: parameters.guestssn,
          dateIn: parameters.datein,
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
          Bookings
        </h1>
        {isLoadingBookings && !errorBookings ? <SpinnerLoader /> : null}
        {!isLoadingBookings && !errorBookings ? (
          <Table data={dataBookings} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default Booking;
