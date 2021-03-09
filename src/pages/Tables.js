import React from "react";
import { SpinnerLoader, Table } from "../components";
import {
  useHotels,
  useRooms,
  useGuests,
  usePayments,
  useBookings,
} from "../hooks/get-hooks";

const Tables = () => {
  const {
    data: dataHotels,
    error: errorHotels,
    isLoading: isLoadingHotels,
  } = useHotels();

  const {
    data: dataRooms,
    error: errorRooms,
    isLoading: isLoadingRooms,
  } = useRooms();

  const {
    data: dataGuests,
    error: errorGuests,
    isLoading: isLoadingGuests,
  } = useGuests();

  const {
    data: dataPayments,
    error: errorPayments,
    isLoading: isLoadingPayments,
  } = usePayments();

  const {
    data: dataBookings,
    error: errorBookings,
    isLoading: isLoadingBookings,
  } = useBookings();

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Hotels
        </h1>
        {isLoadingHotels && !errorHotels ? <SpinnerLoader /> : null}
        {!isLoadingHotels && !errorHotels ? <Table data={dataHotels} /> : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Rooms
        </h1>
        {isLoadingRooms && !errorRooms ? <SpinnerLoader /> : null}
        {!isLoadingRooms && !errorRooms ? <Table data={dataRooms} /> : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Guests
        </h1>
        {isLoadingGuests && !errorGuests ? <SpinnerLoader /> : null}
        {!isLoadingGuests && !errorGuests ? <Table data={dataGuests} /> : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Payments
        </h1>
        {isLoadingPayments && !errorPayments ? <SpinnerLoader /> : null}
        {!isLoadingPayments && !errorPayments ? (
          <Table data={dataPayments} />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Bookings
        </h1>
        {isLoadingBookings && !errorBookings ? <SpinnerLoader /> : null}
        {!isLoadingBookings && !errorBookings ? (
          <Table data={dataBookings} />
        ) : null}
      </div>
    </div>
  );
};

export default Tables;
