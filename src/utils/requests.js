import { client } from ".";

export function onDeleteHotel(params) {
  client
    .post(`/deletehotel`, {
      data: {
        hotelNo: params.hotelno,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onCreateHotel(params) {
  client
    .post(`/createhotel`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onUpdateHotel(params) {
  client
    .post(`/updatehotel`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onDeleteRoom(params) {
  client
    .post(`/deleteroom`, {
      data: {
        roomNo: params.roomno,
        hotelNo: params.hotelno,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onCreateRoom(params) {
  client
    .post(`/createroom`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onUpdateRoom(params) {
  client
    .post(`/updateroom`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onDeleteGuest(params) {
  client
    .post(`/deleteguest`, {
      data: {
        guestSsn: params.guestssn,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onCreateGuest(params) {
  client
    .post(`/createguest`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onUpdateGuest(params) {
  client
    .post(`/updateguest`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onDeleteBooking(params) {
  client
    .post(`/deletebooking`, {
      data: {
        hotelNo: params.hotelno,
        guestSsn: params.guestssn,
        dateIn: params.datein,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onCreateBooking(params) {
  client
    .post(`/createbooking`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onUpdateBooking(params) {
  client
    .post(`/updatebooking`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onDeletePayment(params) {
  client
    .post(`/deletepayment`, {
      data: {
        paymentNo: params.paymentno,
      },
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onCreatePayment(params) {
  client
    .post(`/createpayment`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}

export function onUpdatePayment(params) {
  client
    .post(`/updatepayment`, {
      data: params,
    })
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
}
