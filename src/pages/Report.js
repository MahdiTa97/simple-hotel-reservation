import React from "react";
import { SpinnerLoader, Table } from "../components";
import {
  useCityRoomCount,
  useHotelRoomCount,
  useCityHotelCount,
  useMostCityBooking,
  useMaxAgeGuest,
  useMinAgeGuest,
} from "../hooks/get-hooks";

const Report = () => {
  const {
    data: dataHotelRoomCount,
    error: errorHotelRoomCount,
    isLoading: isLoadingHotelRoomCount,
  } = useHotelRoomCount();

  const {
    data: dataCityRoomCount,
    error: errorCityRoomCount,
    isLoading: isLoadingCityRoomCount,
  } = useCityRoomCount();

  const {
    data: dataCityHotelCount,
    error: errorCityHotelCount,
    isLoading: isLoadingCityHotelCount,
  } = useCityHotelCount();

  const {
    data: dataMostCityBooking,
    error: errorMostCityBooking,
    isLoading: isLoadingMostCityBooking,
  } = useMostCityBooking();

  const {
    data: dataMaxAgeGuest,
    error: errorMaxAgeGuest,
    isLoading: isLoadingMaxAgeGuest,
  } = useMaxAgeGuest();

  const {
    data: dataMinAgeGuest,
    error: errorMinAgeGuest,
    isLoading: isLoadingMinAgeGuest,
  } = useMinAgeGuest();

  return (
    <div className="container mx-auto flex flex-col justify-items-center justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Most Age Guest
        </h1>
        {isLoadingMaxAgeGuest && !errorMaxAgeGuest ? <SpinnerLoader /> : null}
        {!isLoadingMaxAgeGuest && !errorMaxAgeGuest ? (
          <h2 className="text-4xl flex justify-center">
            {dataMaxAgeGuest[0].age.years}
          </h2>
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Min Age Guest
        </h1>
        {isLoadingMinAgeGuest && !errorMinAgeGuest ? <SpinnerLoader /> : null}
        {!isLoadingMinAgeGuest && !errorMinAgeGuest ? (
          <h2 className="text-4xl flex justify-center">
            {dataMinAgeGuest[0].age.years}
          </h2>
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Hotel Room Count
        </h1>
        {isLoadingHotelRoomCount && !errorHotelRoomCount ? (
          <SpinnerLoader />
        ) : null}
        {!isLoadingHotelRoomCount && !errorHotelRoomCount ? (
          <Table data={dataHotelRoomCount} notEdit />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          City Room Count
        </h1>
        {isLoadingCityRoomCount && !errorCityRoomCount ? (
          <SpinnerLoader />
        ) : null}
        {!isLoadingCityRoomCount && !errorCityRoomCount ? (
          <Table data={dataCityRoomCount} notEdit />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          City Hotel Count
        </h1>
        {isLoadingCityHotelCount && !errorCityHotelCount ? (
          <SpinnerLoader />
        ) : null}
        {!isLoadingCityHotelCount && !errorCityHotelCount ? (
          <Table data={dataCityHotelCount} notEdit />
        ) : null}
      </div>
      <div>
        <h1 className="text-3xl font-semibold text-gray-700 text-center p-7 cursor-default capitalize">
          Most City Booking
        </h1>
        {isLoadingMostCityBooking && !errorMostCityBooking ? (
          <SpinnerLoader />
        ) : null}
        {!isLoadingMostCityBooking && !errorMostCityBooking ? (
          <Table data={dataMostCityBooking} notEdit />
        ) : null}
      </div>
    </div>
  );
};

export default Report;
