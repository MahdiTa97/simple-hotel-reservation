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
