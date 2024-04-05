import axios from "../utils/axios";

export const getItineraryApi = ({ airlineID, flightNumber }) => {
  return axios.get("/v2/Air/FIDS/Airport/Departure/TPE", {
    params: {
      $filter: `(AirlineID eq '${airlineID}') and (FlightNumber eq '${flightNumber}')`,
      $orderby: "ScheduleDepartureTime",
      $format: "JSON",
    },
  });
};
