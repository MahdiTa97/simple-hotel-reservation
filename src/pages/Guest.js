import React, { useEffect, useState } from "react";
import { From, SpinnerLoader, Table } from "../components";
import { useGuests } from "../hooks/get-hooks";
import { client } from "../utils";

const Guest = () => {
  const [state, setState] = useState();
  const items = ["guestSsn", "guestFname", "guestLname", "guestBirthdate"];

  const {
    data: dataGuests,
    error: errorGuests,
    isLoading: isLoadingGuests,
    refetch,
  } = useGuests(state);

  useEffect(() => {
    refetch(state).then((res) => console.log(res));
  }, [state]);

  function onDelete(parameters) {
    client
      .post(`/deleteguest`, {
        data: {
          guestSsn: parameters.guestssn,
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
          Guests
        </h1>
        {isLoadingGuests && !errorGuests ? <SpinnerLoader /> : null}
        {!isLoadingGuests && !errorGuests ? (
          <Table data={dataGuests} onDelete={onDelete} />
        ) : null}
      </div>
    </div>
  );
};

export default Guest;
