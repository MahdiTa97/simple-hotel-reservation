import { useQuery } from "react-query";
import { client, queryUrlGenerator } from "../utils";

export function useHotels(parameters) {
  return useQuery("hotels", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/gethotels", parameters)
    );
    return responseData;
  });
}

export function useRooms(parameters) {
  return useQuery("rooms", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/getrooms", parameters)
    );
    return responseData;
  });
}

export function useGuests(parameters) {
  return useQuery("guests", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/getguests", parameters)
    );
    return responseData;
  });
}

export function usePayments(parameters) {
  return useQuery("payments", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/getpayments", parameters)
    );
    return responseData;
  });
}

export function useBookings(parameters) {
  return useQuery("bookings", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/getbookings", parameters)
    );
    return responseData;
  });
}

export function useHotelRoomCount() {
  return useQuery("hotelRoomCount", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/hotelRoomCount")
    );
    return responseData;
  });
}

export function useCityRoomCount() {
  return useQuery("cityroomcount", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/cityroomcount")
    );
    return responseData;
  });
}

export function useCityHotelCount() {
  return useQuery("cityhotelcount", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/cityhotelcount")
    );
    return responseData;
  });
}

export function useMostCityBooking() {
  return useQuery("mostcitybooking", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/mostcitybooking")
    );
    return responseData;
  });
}

export function useMaxAgeGuest() {
  return useQuery("maxageguest", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/maxageguest")
    );
    return responseData;
  });
}
export function useMinAgeGuest() {
  return useQuery("minageguest", async () => {
    const { responseData } = await client.get(
      queryUrlGenerator("/minageguest")
    );
    return responseData;
  });
}
