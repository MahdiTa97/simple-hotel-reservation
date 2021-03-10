export const searchFieldsHotel = ["hotelNo", "hotelName", "city"];
export const createFieldsHotel = [
  "hotelNo",
  "hotelName",
  "city",
  "hotelAddress",
];

export const searchFieldsRoom = [
  "roomNo",
  "hotelNo",
  "roomType",
  "roomPrice",
  "roomStatus",
];

export const createFieldsRoom = [
  "roomNo",
  "hotelNo",
  "roomType",
  "roomPrice",
  "roomStatus",
];

export const searchFieldsGuest = [
  "guestSsn",
  "guestFname",
  "guestLname",
  "guestBirthdate",
];

export const createFieldsGuest = [
  "guestSsn",
  "guestFname",
  "guestLname",
  "guestAddress",
  "guestBirthdate",
];

export const searchFieldsBooking = [
  "hotelNo",
  "guestSsn",
  "dateIn",
  "dateOut",
  "roomNo",
];

export const createFieldsBooking = [
  "hotelNo",
  "guestSsn",
  "dateIn",
  "dateOut",
  "roomNo",
  "paymentNo",
  "bookingStatus",
];

export const searchFieldsPayment = [
  "paymentNo",
  "paymentPrice",
  "paymentType",
  "paymentDate",
];

export const createFieldsPayment = [
  "paymentPrice",
  "paymentType",
  "paymentDate",
];
